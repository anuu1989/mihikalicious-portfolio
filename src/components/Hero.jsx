import './Hero.css'
import profilePic from '../assets/images/profilepic.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <div className="hero-content">
          <p className="hero-label">PORTFOLIO</p>
          <h1 className="hero-name">
            Mihikalicious
          </h1>
          <p className="hero-subtitle">Managed by Pinaki Kashyap</p>
          <div className="hero-info">
            <p className="hero-role">Family Lifestyle Storyteller ✨</p>
            <p className="hero-role">UGC + Family Lifestyle</p>
            <p className="hero-specialties">(Toys, events, restaurants, beauty & self-care)</p>
            <p className="hero-email">pinaki.kashyap1988@gmail.com</p>
            <p className="hero-location">BASED IN MELBOURNE, AUSTRALIA</p>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-image-container">
          <img 
            src={profilePic} 
            alt="Mihikalicious" 
            className="hero-profile-pic"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
