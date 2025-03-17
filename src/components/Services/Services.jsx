import "./Services.css"

const servicesData = [
  {
    id: 1,
    icon: "balance-scale",
    title: "Derecho Civil",
    description:
      "Representación en casos de contratos, propiedad, responsabilidad civil y disputas entre particulares.",
  },
  {
    id: 2,
    icon: "briefcase",
    title: "Derecho Mercantil",
    description: "Asesoramiento legal para empresas, contratos comerciales, fusiones y adquisiciones.",
  },
  {
    id: 3,
    icon: "users",
    title: "Derecho Familiar",
    description: "Asistencia en divorcios, custodia de menores, pensiones alimenticias y adopciones.",
  },
  {
    id: 4,
    icon: "building",
    title: "Derecho Inmobiliario",
    description: "Asesoría en compraventa de propiedades, arrendamientos y resolución de conflictos inmobiliarios.",
  },
  {
    id: 5,
    icon: "gavel",
    title: "Derecho Penal",
    description: "Defensa legal en procesos penales, representación ante tribunales y negociación de penas.",
  },
  {
    id: 6,
    icon: "file-contract",
    title: "Derecho Laboral",
    description:
      "Representación en disputas laborales, negociación de contratos y asesoría en derechos del trabajador.",
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos una amplia gama de servicios legales para satisfacer sus necesidades</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Consultar <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Services;
