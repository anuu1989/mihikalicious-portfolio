# Mihikalicious Portfolio 🌟

A modern, elegant portfolio website for Mihikalicious - Melbourne Mum showcasing family lifestyle content, brand collaborations, and creative work.

**Live Site**: [mihikalicious-portfolio](https://yourusername.github.io/mihikalicious-portfolio/)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with elegant Bodoni Moda typography
- **Responsive Layout**: Fully responsive across all devices (desktop, tablet, mobile)
- **Custom Favicon**: Elegant "M" logo in browser tab
- **Gallery Showcase**: 4 videos + 8 photos from latest work with interactive playback
- **Brand Collaborations**: Display of 10+ trusted brand partnerships
- **Rate Card**: Professional pricing for 6 content creation services
- **Contact Form**: Integrated contact form with Web3Forms API
- **Google Analytics**: Track visitor engagement and conversions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **GitHub Pages Deployment**: Automated CI/CD deployment via GitHub Actions
- **Performance Optimized**: Code splitting, lazy loading, and minification

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Git**: Latest version

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/mihikalicious.git
cd mihikalicious
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables** (optional):
```bash
cp .env.example .env
```

Edit `.env` and add your Google Analytics Measurement ID:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. **Start development server**:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

5. **Build for production**:
```bash
npm run build
```

6. **Preview production build**:
```bash
npm run preview
```

## 📁 Project Structure

```
mihikalicious/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment workflow
├── public/
│   ├── .nojekyll               # GitHub Pages configuration
│   └── favicon.svg             # Custom favicon (M logo)
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profilepic.jpg  # Hero section profile image
│   │       ├── aboutme.jpg     # About section image
│   │       ├── brands/         # Brand logos (10 images)
│   │       │   ├── skechers.png
│   │       │   ├── starbucks.png
│   │       │   ├── superpark.png
│   │       │   ├── mopa.png
│   │       │   ├── natpat.png
│   │       │   ├── bbox.png
│   │       │   ├── dreambaby.png
│   │       │   ├── twisted.png
│   │       │   ├── onlyorganics.png
│   │       │   └── lego.png
│   │       └── gallery/        # Gallery media
│   │           ├── Video1.mp4 - Video4.mp4  # 4 videos
│   │           └── Photo1.jpg - Photo8.jpg  # 8 photos
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Landing section with profile
│   │   ├── Hero.css
│   │   ├── About.jsx           # About me section
│   │   ├── About.css
│   │   ├── Gallery.jsx         # Video & photo gallery
│   │   ├── Gallery.css
│   │   ├── Brands.jsx          # Brand collaborations
│   │   ├── Brands.css
│   │   ├── RateCard.jsx        # Pricing information
│   │   ├── RateCard.css
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Contact.css
│   │   ├── Footer.jsx          # Footer with credits
│   │   └── Footer.css
│   ├── hooks/
│   │   └── useAnalytics.js     # Google Analytics integration
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App-level styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & CSS variables
├── server/                     # Optional Instagram scraper (not used)
├── .env.example                # Environment variables template
├── .env.production             # Production environment config
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Tech Stack

### Frontend
- **React**: 18.2.0 - UI library
- **Vite**: 4.5.0 - Build tool & dev server
- **React Icons**: 4.12.0 - Icon library

### Styling
- **CSS3**: Modern CSS with custom properties
- **Google Fonts**: Bodoni Moda (serif) + Poppins (sans-serif)
- **Responsive Design**: Mobile-first approach

### Integrations
- **Web3Forms**: Contact form API
- **Google Analytics 4**: User tracking & analytics

### Development
- **ESLint**: Code linting
- **Git**: Version control
- **GitHub Actions**: CI/CD pipeline

### Deployment
- **GitHub Pages**: Static site hosting
- **Custom Domain**: Optional CNAME support

## 📝 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Google Analytics 4 (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Note**: Environment variables must be prefixed with `VITE_` to be accessible in the application.

### GitHub Secrets

For automated deployment with GitHub Actions, add this secret to your repository:

**Settings → Secrets and variables → Actions → New repository secret**

- `VITE_GA_MEASUREMENT_ID` - Your Google Analytics Measurement ID

### Vite Configuration

The `vite.config.js` includes:
- Base path configuration for GitHub Pages
- Code splitting for optimized loading
- Build optimization with esbuild
- Instagram API proxy (for development)

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

**Setup Steps**:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

2. **Configure Base Path**:
   - Update `vite.config.js` with your repository name:
   ```javascript
   base: '/your-repo-name/'
   ```

3. **Add Secrets** (optional):
   - Add `VITE_GA_MEASUREMENT_ID` in repository secrets

4. **Push to Main**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Access Your Site**:
   - `https://yourusername.github.io/your-repo-name/`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Deploy the dist/ folder to your hosting service
```

### Custom Domain (Optional)

1. Add a `CNAME` file in `public/` with your domain
2. Configure DNS settings with your domain provider
3. Add `CUSTOM_DOMAIN` secret in GitHub repository

## 📱 Website Sections

### 1. **Hero Section**
- Split-screen layout with elegant typography
- Circular profile image (450px) with white border
- Name: "Mihikalicious" in Bodoni Moda serif
- Subtitle: "Managed by Pinaki Kashyap"
- Role: "Family Lifestyle Storyteller ✨"
- Email: pinaki.kashyap1988@gmail.com
- Instagram link

### 2. **About Section**
- Personal story about Pinaki, mum of Mihika and Danika
- Split layout: text on left, image on right
- Mission statement with border separator
- Rounded image with subtle overlay effect

### 3. **Gallery Section**
- 4x3 grid layout (12 items total)
- 4 videos (Video1-4.mp4) with click-to-play
- 8 photos (Photo1-8.jpg)
- Videos play with sound, hide play button when playing
- Hover effects and smooth transitions
- "View More on Instagram" CTA button

### 4. **Brands Section**
- 10 brand collaborations displayed
- Brands: Skechers, Starbucks, SuperPark, MoPA, NatPat, BBox, Dream Baby, Twisted Ice Creams, Only Organics, Lego Discovery Center
- 5-column grid on desktop, responsive on mobile
- Grayscale logos with color on hover
- White cards with subtle shadows

### 5. **Rate Card Section**
- 6 service offerings with pricing (AUD)
  - Post: $100
  - Reel: $150
  - Story: $80
  - Carousel: $120
  - Unboxing: $120
  - Bundle: $350
- 3-column grid layout
- Icons from React Icons
- Clean, minimalist card design

### 6. **Contact Section**
- Split layout: info on left, form on right
- Contact information (email, Instagram, location)
- Web3Forms integration for form submissions
- Success/error status messages
- Form validation

### 7. **Footer**
- Copyright © 2026 Mihikalicious
- "Created by anuragvaidhya.com" credit
- Instagram follow link
- Responsive two-line layout

## 🎨 Customization

### Color Scheme

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2c2c2c;      /* Dark charcoal for text */
  --secondary-color: #9b59b6;     /* Mauve accent */
  --accent-color: #c39bd3;        /* Light mauve */
  --text-dark: #2c2c2c;           /* Primary text */
  --text-medium: #555555;         /* Secondary text */
  --text-light: #888888;          /* Tertiary text */
  --bg-white: #ffffff;            /* Pure white */
  --bg-light: #fafafa;            /* Off-white */
  --bg-cream: #f8f8f8;            /* Cream background */
  --border-color: #e8e8e8;        /* Subtle borders */
  --gradient: linear-gradient(135deg, #9b59b6 0%, #667eea 100%);
}
```

### Typography

**Headings**: Bodoni Moda (serif) - Elegant, sophisticated  
**Body Text**: Poppins (sans-serif) - Clean, readable

Update fonts in `index.html` or `src/index.css`

### Content Updates

**Hero Section** (`src/components/Hero.jsx`):
- Name, subtitle, role, email, Instagram handle

**About Section** (`src/components/About.jsx`):
- Personal story, mission statement

**Rate Card** (`src/components/RateCard.jsx`):
- Service names, descriptions, prices

**Brands** (`src/components/Brands.jsx`):
- Brand names and logo paths

**Contact** (`src/components/Contact.jsx`):
- Email, Instagram, location
- Web3Forms access key

**Footer** (`src/components/Footer.jsx`):
- Copyright year, creator credit

### Images & Media

**Profile Image**: `src/assets/images/profilepic.jpg`
- Recommended: 800x800px, square, high quality

**About Image**: `src/assets/images/aboutme.jpg`
- Recommended: 1200x800px, landscape

**Gallery Videos**: `src/assets/images/gallery/Video1-4.mp4`
- Format: MP4, H.264 codec
- Recommended: 1080x1920px (vertical) or 1920x1080px (horizontal)

**Gallery Photos**: `src/assets/images/gallery/Photo1-8.jpg`
- Format: JPG or PNG
- Recommended: 1080x1080px, square

**Brand Logos**: `src/assets/images/brands/*.png`
- Format: PNG with transparent background
- Recommended: 400x400px, square

**Favicon**: `public/favicon.svg`
- Current: Gradient circle with "M" letter
- Customize the SVG to change colors or letter

## 📊 Analytics & Tracking

### Google Analytics 4 Integration

The site includes comprehensive GA4 tracking via `src/hooks/useAnalytics.js`.

**Events Tracked**:
- **Page Views**: Automatic on load
- **Section Views**: When user scrolls to each section
- **External Links**: Instagram, creator website clicks
- **Form Submissions**: Contact form success/failure
- **User Engagement**: Time on page, scroll depth

**Setup**:
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to `.env` file or GitHub Secrets
4. Analytics will automatically initialize on page load

**Custom Events**:
```javascript
import { trackEvent } from './hooks/useAnalytics'

// Track custom events
trackEvent('button_click', { button_name: 'CTA' })
```

## 🔧 Development

### Available Scripts

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Lint code (if ESLint is configured)
npm run lint
```

### Development Tips

**Hot Module Replacement (HMR)**:
- Changes to React components update instantly
- CSS changes apply without page reload

**Browser DevTools**:
- React DevTools extension recommended
- Check Console for any errors or warnings

**Performance**:
- Images are lazy-loaded in Gallery
- Code splitting for vendor and icons
- Minification and tree-shaking in production

**Debugging**:
- Source maps disabled in production for security
- Enable in `vite.config.js` if needed: `sourcemap: true`

### Code Structure Best Practices

- **Components**: One component per file
- **Styles**: Co-located CSS files with components
- **Assets**: Organized by type (images, videos)
- **Hooks**: Reusable logic in custom hooks
- **Constants**: Define in component or separate file

## 🐛 Troubleshooting

### Common Issues

**Issue**: Videos not playing
- **Solution**: Ensure videos are in MP4 format with H.264 codec
- Check file paths in `Gallery.jsx`

**Issue**: Images not loading
- **Solution**: Verify image paths are correct
- Images in `src/assets` need to be imported
- Images in `public/` are referenced with `/filename`

**Issue**: Deployment fails
- **Solution**: Check GitHub Actions logs
- Verify `base` path in `vite.config.js` matches repo name
- Ensure all dependencies are in `package.json`

**Issue**: Styles not applying
- **Solution**: Check CSS import order in components
- Verify CSS variables are defined in `index.css`
- Clear browser cache

**Issue**: Analytics not tracking
- **Solution**: Verify `VITE_GA_MEASUREMENT_ID` is set
- Check browser console for GA errors
- Ensure ad blockers are disabled for testing

### Getting Help

- Check [Vite Documentation](https://vitejs.dev/)
- Check [React Documentation](https://react.dev/)
- Review GitHub Issues in this repository

## 🚀 Performance

### Optimization Features

- **Code Splitting**: Vendor and icons in separate chunks
- **Lazy Loading**: Images load as they enter viewport
- **Minification**: CSS and JS minified in production
- **Tree Shaking**: Unused code removed
- **Asset Optimization**: Images and videos optimized
- **Caching**: Static assets cached by browser

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

### Tips for Better Performance

1. Compress images before uploading (use TinyPNG, ImageOptim)
2. Keep videos under 10MB each
3. Use WebP format for images (with JPG fallback)
4. Minimize custom fonts (currently using 2 font families)
5. Enable CDN for faster global delivery

## 📄 License

This project is private and proprietary.

© 2026 Mihikalicious. All rights reserved.

## 👤 Contact & Support

### Mihikalicious

- **Email**: [pinaki.kashyap1988@gmail.com](mailto:pinaki.kashyap1988@gmail.com)
- **Instagram**: [@mihikalicious](https://www.instagram.com/mihikalicious/)
- **Location**: Melbourne, Australia

### Website Creator

- **Portfolio**: [anuragvaidhya.com](https://anuragvaidhya.com)
- **GitHub**: [@anuragvaidhya](https://github.com/anuragvaidhya)

## 🙏 Acknowledgments

### Design & Inspiration
- Modern portfolio design principles
- Minimalist UI/UX patterns
- Elegant typography combinations

### Technologies & Tools
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Bodoni Moda & Poppins
- [Web3Forms](https://web3forms.com/) - Contact form API
- [Google Analytics](https://analytics.google.com/) - Analytics platform
- [GitHub Pages](https://pages.github.com/) - Hosting platform

### Special Thanks
- Design inspiration from modern content creator portfolios
- Community feedback and suggestions
- Open source contributors

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/learn)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Analytics 4 Guide](https://support.google.com/analytics/answer/10089681)

## 🔄 Version History

### v1.0.0 (Current)
- ✅ Initial release
- ✅ 7 main sections (Hero, About, Gallery, Brands, Rates, Contact, Footer)
- ✅ Responsive design for all devices
- ✅ Google Analytics integration
- ✅ Custom favicon with "M" logo
- ✅ GitHub Actions deployment
- ✅ Web3Forms contact integration
- ✅ Video gallery with 4 videos + 8 photos
- ✅ 10 brand collaborations showcase
- ✅ SEO optimized with meta tags

---

**Made with ❤️ by [anuragvaidhya.com](https://anuragvaidhya.com)**

*Last Updated: February 2026*
