import { FaInstagram, FaVideo, FaCamera, FaImage } from 'react-icons/fa'
import './RateCard.css'

const RateCard = () => {
  const rates = [
    { icon: <FaCamera />, service: 'Instagram Post', price: 'AUD $100' },
    { icon: <FaVideo />, service: 'Instagram Reel', price: 'AUD $150' },
    { icon: <FaInstagram />, service: 'Instagram Story', price: 'AUD $80' },
    { icon: <FaImage />, service: 'Carousel Post', price: 'AUD $120' },
    { icon: <FaVideo />, service: 'Product Unboxing', price: 'AUD $120' },
    { icon: <FaInstagram />, service: 'Content Bundle', price: 'AUD $350' }
  ]

  return (
    <section id="rates" className="rate-card">
      <div className="rate-container">
        <div className="rate-header">
          <p className="rate-label">RATES</p>
          <h2 className="rate-title">Content Creation</h2>
        </div>

        <div className="rates-grid">
          {rates.map((rate, index) => (
            <div key={index} className="rate-item">
              <div className="rate-icon">{rate.icon}</div>
              <h3 className="rate-service">{rate.service}</h3>
              <p className="rate-price">{rate.price}</p>
            </div>
          ))}
        </div>

        <div className="rate-footer">
          <p>Custom packages available • Usage rights included</p>
          <a href="#contact" className="rate-cta">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default RateCard
