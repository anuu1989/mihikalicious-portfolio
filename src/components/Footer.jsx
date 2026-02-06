import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">© 2026 Mihikalicious. All rights reserved.</p>
          <p className="footer-credit">
            Created by{' '}
            <a
              href="https://anuragvaidhya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              anuragvaidhya.com
            </a>
          </p>
        </div>
        <div className="footer-social">
          <p>
            Follow{' '}
            <a
              href="https://www.instagram.com/mihikalicious/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              @mihikalicious
            </a>{' '}
            on Instagram
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
