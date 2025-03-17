import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>LexFirma</h3>
            <p>
              Somos un bufete de abogados comprometido con la excelencia y la integridad en la práctica legal,
              ofreciendo soluciones efectivas a nuestros clientes desde 1998.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#about">Nosotros</a>
              </li>
              <li>
                <a href="#team">Equipo</a>
              </li>
              <li>
                <a href="#testimonials">Testimonios</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Servicios</h3>
            <ul>
              <li>
                <a href="#services">Derecho Civil</a>
              </li>
              <li>
                <a href="#services">Derecho Mercantil</a>
              </li>
              <li>
                <a href="#services">Derecho Familiar</a>
              </li>
              <li>
                <a href="#services">Derecho Inmobiliario</a>
              </li>
              <li>
                <a href="#services">Derecho Penal</a>
              </li>
              <li>
                <a href="#services">Derecho Laboral</a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Boletín Informativo</h3>
            <p>Suscríbase para recibir noticias y actualizaciones legales.</p>
            <form>
              <input type="email" placeholder="Su correo electrónico" required />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} LexFirma. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

