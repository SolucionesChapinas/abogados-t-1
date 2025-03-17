"use client"

import { useState } from "react"
import "./Testimonials.css"

const testimonialsData = [
  {
    id: 1,
    name: "Roberto Méndez",
    position: "Empresario",
    image: "/abogados-t-1/images/testimonial-1.avif",
    text: "El equipo de LexFirma fue fundamental para resolver un complejo caso de derecho mercantil. Su profesionalismo y conocimiento nos ayudaron a obtener un resultado favorable. Altamente recomendados.",
  },
  {
    id: 2,
    name: "María Fernández",
    position: "Directora de Recursos Humanos",
    image: "/abogados-t-1/images/testimonial-2.avif",
    text: "Excelente asesoramiento en temas laborales. Nos han ayudado a implementar políticas que cumplen con la legislación y protegen tanto a la empresa como a nuestros empleados.",
  },
  {
    id: 3,
    name: "Juan Pérez",
    position: "Cliente Particular",
    image: "/abogados-t-1/images/testimonial-3.avif",
    text: "Durante mi divorcio, el apoyo legal y emocional que recibí fue excepcional. Siempre me mantuvieron informado y lucharon por mis derechos. No podría estar más satisfecho con el resultado.",
  },
  {
    id: 4,
    name: "Sofía Ramírez",
    position: "Propietaria de Inmobiliaria",
    image: "/abogados-t-1/images/testimonial-4.avif",
    text: "Su experiencia en derecho inmobiliario nos ha permitido cerrar transacciones complejas con total seguridad jurídica. Son minuciosos, eficientes y siempre disponibles para consultas.",
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length)
  }

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p>Lo que nuestros clientes dicen sobre nosotros</p>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p>{testimonialsData[activeIndex].text}</p>
            <div className="testimonial-author">
              <img
                src={testimonialsData[activeIndex].image || "/placeholder.svg"}
                alt={testimonialsData[activeIndex].name}
              />
              <div>
                <h4>{testimonialsData[activeIndex].name}</h4>
                <p>{testimonialsData[activeIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button onClick={prevTestimonial} aria-label="Testimonio anterior">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="testimonial-dots">
              {testimonialsData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button onClick={nextTestimonial} aria-label="Testimonio siguiente">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
