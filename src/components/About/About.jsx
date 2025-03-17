import "./About.css"

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/abogados-t-1/images/about.webp" alt="Bufete de abogados" />
            <div className="experience-badge">
              <span className="years">25</span>
              <span className="text">Años de Experiencia</span>
            </div>
          </div>

          <div className="about-text">
            <h2>Sobre Nosotros</h2>
            <p className="lead">
              Somos un bufete de abogados comprometido con la excelencia y la integridad en la práctica legal.
            </p>

            <p>
              Fundado en 1998, nuestro despacho ha crecido hasta convertirse en una de las firmas legales más respetadas
              de la región. Nuestro equipo de abogados altamente calificados combina experiencia, conocimiento y
              dedicación para ofrecer soluciones legales efectivas a nuestros clientes.
            </p>

            <p>
              Nos enorgullece nuestro enfoque personalizado, entendiendo que cada caso es único y requiere una
              estrategia adaptada a las necesidades específicas de cada cliente. Nuestro compromiso con la excelencia
              nos ha permitido construir relaciones duraderas basadas en la confianza y los resultados.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-text">Casos Ganados</span>
              </div>
              <div className="stat">
                <span className="stat-number">1200+</span>
                <span className="stat-text">Clientes Satisfechos</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-text">Abogados Expertos</span>
              </div>
            </div>

            <a href="#contact" className="btn">
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

