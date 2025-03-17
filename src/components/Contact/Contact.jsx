"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Su mensaje ha sido enviado. Nos pondremos en contacto con usted pronto.",
    })

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      })
    }, 5000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Contáctenos</h2>
          <p>Estamos aquí para ayudarle con sus necesidades legales</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Nuestra Ubicación</h3>
                <p>Av. Principal 123, Ciudad</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3>Teléfono</h3>
                <p>+123 456 7890</p>
                <p>+123 456 7891</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>info@lexfirma.com</p>
                <p>contacto@lexfirma.com</p>
              </div>
            </div>

            <div className="info-item" style={{ width: "100%" }}>
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div style={{ width: "100%" }}>
                <h3>Horario de Atención</h3>
                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio de Interés</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Seleccione un servicio</option>
                  <option value="civil">Derecho Civil</option>
                  <option value="mercantil">Derecho Mercantil</option>
                  <option value="familiar">Derecho Familiar</option>
                  <option value="inmobiliario">Derecho Inmobiliario</option>
                  <option value="penal">Derecho Penal</option>
                  <option value="laboral">Derecho Laboral</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-full">
                Enviar Mensaje
              </button>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

