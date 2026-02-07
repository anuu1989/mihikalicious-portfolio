import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Brands from './components/Brands'
import RateCard from './components/RateCard'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WelcomeBanner from './components/WelcomeBanner'
import { useAnalytics, trackSectionView } from './hooks/useAnalytics'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  
  // Initialize Google Analytics
  useAnalytics()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'brands', 'rates', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section)
              // Track section view
              trackSectionView(section)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  return (
    <div className="app">
      <WelcomeBanner />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Gallery />
      <Brands />
      <RateCard />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
