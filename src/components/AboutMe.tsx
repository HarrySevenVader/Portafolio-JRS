import React from "react";
import "../css/AboutMe.css";
import aboutMe_img from "../assets/images/aboutme-img10.png"; // Asegúrate de que la ruta sea correcta

const AboutMe: React.FC = () => {
  return (
    <section className="aboutme-container" id="aboutme-container">
      <div className="img-content">
        <img src={aboutMe_img} alt="Sobre Mí" className="profile-picture" />
      </div>
      <div className="text-container">
        <h2>Sobre Mí</h2>
        <h3>Hola, soy Jarol Riquelme</h3>
        <p>
          Soy egresado de Ingeniería en Informática de la Universidad Tecnológica Metropolitana, en Santiago de Chile. Durante mi formación desarrollé una base sólida en programación y en el desarrollo de aplicaciones web, enfocándome en crear soluciones funcionales y bien estructuradas. Además, realicé mi práctica profesional en Sodimac, desempeñándome como Analista de Datos, lo que me permitió adquirir experiencia real sobre cómo es trabajar en el campo profesional y aplicar mis conocimientos en un entorno laboral. Actualmente me proyecto como Ingeniero de Software, con interés en seguir profundizando mis conocimientos en áreas como ciberseguridad, computación en la nube e inteligencia artificial, con el objetivo de aplicar estas tecnologías en el desarrollo de soluciones modernas, eficientes y escalables que generen un impacto positivo y aporten valor a las personas y organizaciones.
        </p>
      </div>
      <div className="button-cv">
        <div className="button-parrot">
          <a
            href="/assets/files/CV_JDRS.pdf"
            download="CV_JDRS.pdf"
          >
            <button>
              Descargar CV
              <span className="parrot"></span>
              <span className="parrot"></span>
              <span className="parrot"></span>
              <span className="parrot"></span>
              <span className="parrot"></span>
              <span className="parrot"></span>
            </button>
          </a>
        </div>
      </div>

      {/* Mini resumen */}

      <div className="highlights-container">
        <div className="highlight">
            <i className="fas fa-graduation-cap"></i>
            <p>Estudiante UTEM</p>
        </div>
        <div className="highlight">
            <i className="fas fa-laptop-code"></i>
            <p>Frontend & Mobile Dev</p>
        </div>
        <div className="highlight">
            <i className="fas fa-project-diagram"></i>
            <p>Software Engineer</p>
        </div>
        <div className="highlight">
            <i className="fas fa-map-marker-alt"></i>
            <p>Santiago, Chile</p>
        </div>
    </div>

      <div className="interests-container">
      <h4>Intereses Profesionales</h4>
      <div className="interests-tags">
        <span>Software Engineer</span>
        <span>Web Development</span>
        <span>Data Analysis</span>
        <span>Cybersecurity</span>
        <span>Cloud Computing</span>
        <span>AI & Automation</span>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;
