import { useState, useEffect, useRef, useCallback } from 'react'
import aboutMeImage from '../assets/images/aboutme.jpg'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-left">
          <p className="about-label">ABOUT ME</p>
          <h2 className="about-title">My Story</h2>
          
          <div className="about-story">
            <p className="about-intro">
              I'm Pinaki, a proud mum of two beautiful princesses — <strong>Mihika</strong> and <strong>Danika</strong>.
            </p>
            
            <p className="about-description">
              Through my lens, I capture the precious moments of my girls growing from curious toddlers 
              to confident young explorers. Every day is a new adventure as we discover the world together 
              as a family — from playful mornings to cozy bedtime stories.
            </p>
            
            <p className="about-description">
              My content celebrates the beautiful chaos of family life, the joy in simple moments, 
              and the authentic experiences that shape our journey. Whether we're trying new toys, 
              exploring local events, enjoying family dinners, or discovering beauty and self-care 
              routines that fit into our busy lives — I share it all with honesty and heart.
            </p>
            
            <p className="about-mission">
              Join us on Instagram <strong>@mihikalicious</strong> as we create memories, 
              one moment at a time. ✨
            </p>
          </div>
        </div>
        
        <div className="about-right">
          <div className="about-image-container">
            <img 
              src={aboutMeImage} 
              alt="Pinaki with Mihika and Danika" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
