import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">@mihikalicious</div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'gallery', 'brands', 'rates', 'contact'].map((section) => (
            <li key={section}>
              <button
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
