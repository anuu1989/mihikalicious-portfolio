import { useState, useEffect } from 'react'
import './WelcomeBanner.css'
import bannerImage from '../assets/images/banner.jpg'
import bannerImageMobile from '../assets/images/banner-mobile.jpg'

const WelcomeBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Check if banner was already shown in this session
    const bannerShown = sessionStorage.getItem('welcomeBannerShown')
    
    if (!bannerShown) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true)
      }, 500)

      // Auto-close after 8 seconds
      setTimeout(() => {
        handleClose()
      }, 8000)

      // Mark as shown in session
      sessionStorage.setItem('welcomeBannerShown', 'true')
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 600)
  }

  if (!isVisible) return null

  return (
    <>
      <div className={`welcome-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose} />
      <div className={`welcome-banner ${isClosing ? 'closing' : ''}`}>
        <button className="close-button" onClick={handleClose} aria-label="Close banner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="banner-content">
          <div 
            className="banner-image-section" 
            style={{ backgroundImage: `url(${isMobile ? bannerImageMobile : bannerImage})` }}
          >
            <div className="image-overlay"></div>
          </div>

          <div className="banner-text">
            <div className="banner-sparkle">✨</div>
            <h2 className="banner-title">Welcome to Mihikalicious!</h2>
            <p className="banner-subtitle">
              Join me on a journey through family moments, brand collaborations, and creative content
            </p>
            <div className="banner-features">
              <div className="feature-item">
                <span className="feature-icon">📸</span>
                <span>UGC Content</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👨‍👩‍👧‍👦</span>
                <span>Family Lifestyle</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤝</span>
                <span>Brand Partnerships</span>
              </div>
            </div>
            <button className="banner-cta" onClick={handleClose}>
              Explore Portfolio
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>

        <div className="banner-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </>
  )
}

export default WelcomeBanner
