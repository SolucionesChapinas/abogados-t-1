import "./Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Justicia y Excelencia Legal</h1>
        <p>Defendemos sus derechos con experiencia, integridad y dedicación</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">
            Consulta Gratuita
          </a>
          <a href="#services" className="btn btn-secondary">
            Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

