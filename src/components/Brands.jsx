import './Brands.css'

const Brands = () => {
  const brands = [
    { name: 'Skechers', image: '/src/assets/images/brands/skechers.png' },
    { name: 'Starbucks', image: '/src/assets/images/brands/starbucks.png' },
    { name: 'SuperPark', image: '/src/assets/images/brands/superpark.png' },
    { name: 'MoPA', image: '/src/assets/images/brands/mopa.png' },
    { name: 'NatPat', image: '/src/assets/images/brands/natpat.png' },
    { name: 'BBox', image: '/src/assets/images/brands/bbox.png' },
    { name: 'Dream Baby', image: '/src/assets/images/brands/dreambaby.png' },
    { name: 'Twisted Ice Creams', image: '/src/assets/images/brands/twisted.png' },
    { name: 'Only Organics', image: '/src/assets/images/brands/onlyorganics.png' },
    { name: 'Lego Discovery Center', image: '/src/assets/images/brands/lego.png' }
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
