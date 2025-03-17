import "./Team.css"

const teamData = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "Socio Fundador",
    image: "/abogados-t-1/images/team-1.webp",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "carlos@lexfirma.com",
    },
  },
  {
    id: 2,
    name: "Ana Martínez",
    position: "Derecho Mercantil",
    image: "/abogados-t-1/images/team-2.webp",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ana@lexfirma.com",
    },
  },
  {
    id: 3,
    name: "Miguel Sánchez",
    position: "Derecho Penal",
    image: "/abogados-t-1/images/team-3.webp",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "miguel@lexfirma.com",
    },
  },
  {
    id: 4,
    name: "Luis Gómez",
    position: "Derecho Familiar",
    image: "/abogados-t-1/images/team-4.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "laura@lexfirma.com",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-title">
          <h2>Nuestro Equipo</h2>
          <p>Conozca a nuestros abogados expertos dedicados a su éxito</p>
        </div>

        <div className="team-grid">
          {teamData.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-image">
                <img src={member.image || `/placeholder.svg?height=300&width=250`} alt={member.name} />
                <div className="member-social">
                  <a href={member.social.linkedin} aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={`mailto:${member.social.email}`} aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
