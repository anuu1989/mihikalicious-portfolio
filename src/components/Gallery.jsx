import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import './Gallery.css'

// Import videos
import video1 from '../assets/images/gallery/Video1.mp4'
import video2 from '../assets/images/gallery/Video2.mp4'
import video3 from '../assets/images/gallery/Video3.mp4'
import video4 from '../assets/images/gallery/Video4.mp4'

// Import photos
import photo1 from '../assets/images/gallery/Photo1.jpg'
import photo2 from '../assets/images/gallery/Photo2.jpg'
import photo3 from '../assets/images/gallery/Photo3.jpg'
import photo4 from '../assets/images/gallery/Photo4.jpg'
import photo5 from '../assets/images/gallery/Photo5.jpg'
import photo6 from '../assets/images/gallery/Photo6.jpg'
import photo7 from '../assets/images/gallery/Photo7.jpg'
import photo8 from '../assets/images/gallery/Photo8.jpg'

const Gallery = () => {
  const [playingVideos, setPlayingVideos] = useState({})

  // Gallery items with actual videos and photos
  const galleryItems = [
    { id: 1, type: 'video', src: video1, poster: null },
    { id: 2, type: 'image', src: photo1 },
    { id: 3, type: 'video', src: video2, poster: null },
    { id: 4, type: 'image', src: photo2 },
    { id: 5, type: 'image', src: photo3 },
    { id: 6, type: 'video', src: video3, poster: null },
    { id: 7, type: 'image', src: photo4 },
    { id: 8, type: 'image', src: photo5 },
    { id: 9, type: 'video', src: video4, poster: null },
    { id: 10, type: 'image', src: photo6 },
    { id: 11, type: 'image', src: photo7 },
    { id: 12, type: 'image', src: photo8 }
  ]

  const handleVideoClick = (e, itemId) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      if (video.paused) {
        video.muted = false // Unmute when playing
        video.play()
        setPlayingVideos(prev => ({ ...prev, [itemId]: true }))
      } else {
        video.pause()
        setPlayingVideos(prev => ({ ...prev, [itemId]: false }))
      }
    }
  }

  const handleVideoEnded = (itemId) => {
    setPlayingVideos(prev => ({ ...prev, [itemId]: false }))
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-label">PORTFOLIO</p>
          <h2 className="gallery-title">Latest Work</h2>
          <p className="gallery-subtitle">A few of my latest content creations</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              {item.type === 'video' ? (
                <div className="video-container" onClick={(e) => handleVideoClick(e, item.id)}>
                  <video 
                    className="gallery-video"
                    src={item.src}
                    poster={item.poster}
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    onEnded={() => handleVideoEnded(item.id)}
                  />
                  {!playingVideos[item.id] && (
                    <div className="video-badge">
                      <FaPlay size={20} />
                    </div>
                  )}
                </div>
              ) : (
                <div className="image-container">
                  <img 
                    src={item.src} 
                    alt={`Gallery item ${item.id}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <a 
            href="https://www.instagram.com/mihikalicious/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
