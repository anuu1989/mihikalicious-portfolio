import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { WebSocketServer } from 'ws';
import cron from 'node-cron';
import http from 'http';

const app = express();
const PORT = 3001;

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.json());

// In-memory cache
let cachedData = {
  data: null,
  timestamp: null,
  lastFetchSuccess: false
};

// Store connected WebSocket clients
const clients = new Set();

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('🔌 New WebSocket client connected');
  clients.add(ws);

  // Send current cached data immediately
  if (cachedData.data) {
    ws.send(JSON.stringify({
      type: 'initial',
      data: cachedData.data,
      timestamp: cachedData.timestamp
    }));
  }

  ws.on('close', () => {
    console.log('🔌 WebSocket client disconnected');
    clients.delete(ws);
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    clients.delete(ws);
  });
});

// Broadcast to all connected clients
function broadcastUpdate(data) {
  const message = JSON.stringify({
    type: 'update',
    data: data,
    timestamp: Date.now()
  });

  clients.forEach((client) => {
    if (client.readyState === 1) { // OPEN
      client.send(message);
    }
  });

  console.log(`📡 Broadcasted update to ${clients.size} clients`);
}

// Instagram scraper function
async function scrapeInstagram(username) {
  try {
    console.log(`🔄 Scraping Instagram profile: ${username}`);
    
    const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'X-IG-App-ID': '936619743392459',
        'X-ASBD-ID': '198387',
        'X-IG-WWW-Claim': '0',
        'Origin': 'https://www.instagram.com',
        'Referer': `https://www.instagram.com/${username}/`,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin'
      },
      timeout: 10000
    });

    const user = response.data?.data?.user;

    if (!user) {
      throw new Error('User data not found');
    }

    const profileData = {
      username: user.username,
      fullName: user.full_name || username,
      biography: user.biography || '',
      followers: user.edge_followed_by?.count || 0,
      following: user.edge_follow?.count || 0,
      posts: user.edge_owner_to_timeline_media?.count || 0,
      profilePicUrl: user.profile_pic_url_hd || user.profile_pic_url || ''
    };

    const edges = user.edge_owner_to_timeline_media?.edges || [];
    const posts = edges.slice(0, 12).map(edge => {
      const node = edge.node;
      return {
        id: node.id,
        shortcode: node.shortcode,
        displayUrl: node.display_url,
        thumbnail: node.thumbnail_src,
        caption: node.edge_media_to_caption?.edges?.[0]?.node?.text || '',
        likes: node.edge_liked_by?.count || 0,
        comments: node.edge_media_to_comment?.count || 0,
        timestamp: node.taken_at_timestamp,
        isVideo: node.is_video || false
      };
    });

    const result = {
      success: true,
      profile: profileData,
      posts: posts,
      message: 'Data fetched successfully',
      fetchedAt: new Date().toISOString()
    };

    console.log(`✅ Successfully scraped ${posts.length} posts for @${username}`);
    return result;

  } catch (error) {
    console.error('❌ Error scraping Instagram:', error.message);
    throw error;
  }
}

// Auto-refresh Instagram data every 5 minutes
cron.schedule('*/5 * * * *', async () => {
  console.log('⏰ Auto-refresh triggered (every 5 minutes)');
  try {
    const data = await scrapeInstagram('mihikalicious');
    cachedData.data = data;
    cachedData.timestamp = Date.now();
    cachedData.lastFetchSuccess = true;
    
    // Broadcast to all connected clients
    broadcastUpdate(data);
  } catch (error) {
    console.error('Auto-refresh failed:', error.message);
    cachedData.lastFetchSuccess = false;
  }
});

// Manual refresh endpoint
app.post('/api/refresh/:username', async (req, res) => {
  const { username } = req.params;
  
  try {
    console.log(`🔄 Manual refresh requested for @${username}`);
    const data = await scrapeInstagram(username);
    
    cachedData.data = data;
    cachedData.timestamp = Date.now();
    cachedData.lastFetchSuccess = true;
    
    // Broadcast to all connected clients
    broadcastUpdate(data);
    
    res.json(data);
  } catch (error) {
    cachedData.lastFetchSuccess = false;
    res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to refresh Instagram data'
    });
  }
});

// Get Instagram profile data
app.get('/api/instagram/:username', async (req, res) => {
  const { username } = req.params;
  
  // Return cached data if available and fresh (less than 5 minutes old)
  if (cachedData.data && cachedData.timestamp) {
    const age = Date.now() - cachedData.timestamp;
    if (age < 5 * 60 * 1000) {
      console.log(`📦 Returning cached data (${Math.floor(age / 1000)}s old)`);
      return res.json(cachedData.data);
    }
  }
  
  // Fetch fresh data
  try {
    const data = await scrapeInstagram(username);
    cachedData.data = data;
    cachedData.timestamp = Date.now();
    cachedData.lastFetchSuccess = true;
    
    res.json(data);
  } catch (error) {
    cachedData.lastFetchSuccess = false;
    res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to fetch Instagram data'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Instagram scraper server is running',
    websocket: `ws://localhost:${PORT}`,
    connectedClients: clients.size,
    lastFetchSuccess: cachedData.lastFetchSuccess,
    cacheAge: cachedData.timestamp ? Math.floor((Date.now() - cachedData.timestamp) / 1000) : null
  });
});

// Start server
server.listen(PORT, async () => {
  console.log(`🚀 Instagram scraper server running on http://localhost:${PORT}`);
  console.log(`🔌 WebSocket server running on ws://localhost:${PORT}`);
  console.log(`📸 API endpoint: http://localhost:${PORT}/api/instagram/mihikalicious`);
  console.log(`⏰ Auto-refresh: Every 5 minutes`);
  console.log(`💡 Real-time updates via WebSocket`);
  
  // Initial fetch on startup
  try {
    console.log('\n🔄 Performing initial Instagram fetch...');
    const data = await scrapeInstagram('mihikalicious');
    cachedData.data = data;
    cachedData.timestamp = Date.now();
    cachedData.lastFetchSuccess = true;
    console.log('✅ Initial fetch completed\n');
  } catch (error) {
    console.error('❌ Initial fetch failed:', error.message);
    cachedData.lastFetchSuccess = false;
  }
});


// Image proxy endpoint to bypass Instagram CORS
app.get('/api/proxy-image', async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    console.log('🖼️ Proxying image:', url.substring(0, 80) + '...');
    
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.instagram.com/',
        'Origin': 'https://www.instagram.com',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
      },
      timeout: 10000,
      maxRedirects: 5
    });

    // Set appropriate headers
    const contentType = response.headers['content-type'] || 'image/jpeg';
    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
    
    console.log('✅ Image proxied successfully');
    res.send(response.data);
  } catch (error) {
    console.error('❌ Error proxying image:', error.message);
    
    // Return a placeholder image instead of error
    const placeholderSvg = `
      <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#9b59b6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
          </linearGradient>
        </defs>
        <circle cx="125" cy="125" r="125" fill="url(#grad)"/>
        <path d="M125 100c16.569 0 30-13.431 30-30s-13.431-30-30-30-30 13.431-30 30 13.431 30 30 30zm0 15c-20 0-60 10.05-60 30v15h120v-15c0-19.95-40-30-60-30z" fill="white"/>
      </svg>
    `;
    
    res.set('Content-Type', 'image/svg+xml');
    res.set('Cache-Control', 'public, max-age=3600');
    res.send(placeholderSvg);
  }
});
