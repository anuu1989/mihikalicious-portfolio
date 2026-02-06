import './Brands.css'
import skechersLogo from '../assets/images/brands/skechers.png'
import starbucksLogo from '../assets/images/brands/starbucks.png'
import superparkLogo from '../assets/images/brands/superpark.png'
import mopaLogo from '../assets/images/brands/mopa.png'
import natpatLogo from '../assets/images/brands/natpat.png'
import bboxLogo from '../assets/images/brands/bbox.png'
import dreambabyLogo from '../assets/images/brands/dreambaby.png'
import twistedLogo from '../assets/images/brands/twisted.png'
import onlyorganicsLogo from '../assets/images/brands/onlyorganics.png'
import legoLogo from '../assets/images/brands/lego.png'

const Brands = () => {
  const brands = [
    { name: 'Skechers', image: skechersLogo },
    { name: 'Starbucks', image: starbucksLogo },
    { name: 'SuperPark', image: superparkLogo },
    { name: 'MoPA', image: mopaLogo },
    { name: 'NatPat', image: natpatLogo },
    { name: 'BBox', image: bboxLogo },
    { name: 'Dream Baby', image: dreambabyLogo },
    { name: 'Twisted Ice Creams', image: twistedLogo },
    { name: 'Only Organics', image: onlyorganicsLogo },
    { name: 'Lego Discovery Center', image: legoLogo }
  ]

  return (
    <section id="brands" className="brands">
      <div className="brands-container">
        <div className="brands-header">
          <p className="brands-label">COLLABORATIONS</p>
          <h2 className="brands-title">Trusted by Brands</h2>
          <p className="brands-subtitle">
            Proud to have collaborated with these amazing brands
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-logo-container">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="brand-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="brand-logo-placeholder" style={{ display: 'none' }}>
                  {brand.name.charAt(0)}
                </div>
              </div>
              <h3 className="brand-name">{brand.name}</h3>
            </div>
          ))}
        </div>

        <div className="brands-footer">
          <p>And many more...</p>
        </div>
      </div>
    </section>
  )
}

export default Brands
