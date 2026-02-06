import { useState } from 'react'
import { FaInstagram, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { trackFormSubmit, trackExternalLink } from '../hooks/useAnalytics'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4773c1cb-f778-41f6-aa73-faf493d52d98',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Mihikalicious Portfolio`,
          from_name: 'Mihikalicious Portfolio',
          to_email: 'pinaki.kashyap1988@gmail.com'
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
        trackFormSubmit('contact_form', true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please email me directly.'
      })
      trackFormSubmit('contact_form', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInstagramClick = () => {
    trackExternalLink('https://www.instagram.com/mihikalicious/', 'Instagram Link - Contact')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-split">
        <div className="contact-left">
          <p className="contact-label">CONTACT</p>
          <h2 className="contact-title">Let's Collaborate</h2>
          
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">EMAIL</span>
              <a href="mailto:pinaki.kashyap1988@gmail.com" className="info-value">
                pinaki.kashyap1988@gmail.com
              </a>
            </div>
            
            <div className="info-item">
              <span className="info-label">INSTAGRAM</span>
              <a 
                href="https://www.instagram.com/mihikalicious/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-value"
                onClick={handleInstagramClick}
              >
                @mihikalicious
              </a>
            </div>
            
            <div className="info-item">
              <span className="info-label">LOCATION</span>
              <span className="info-value">Melbourne, Australia</span>
            </div>
          </div>
        </div>
        
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
            
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? (
                  <FaCheckCircle size={18} />
                ) : (
                  <FaExclamationCircle size={18} />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
