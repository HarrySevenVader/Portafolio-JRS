import React from "react";
import "../css/AboutMe.css";
import aboutMe_img from "../assets/images/me2.jpg"; // Asegúrate de que la ruta sea correcta

const AboutMe: React.FC = () => {
  return (
    <section className="aboutme-container">
      <div className="img-content">
        <img src={aboutMe_img} alt="Sobre Mí" className="profile-picture" />
      </div>
      <div className="text-container">
        <h2>Sobre Mí</h2>
        <h3>Hola, soy Jarol Riquelme</h3>
        <p>
          Soy estudiante de Ingeniería en Informática en la Universidad
          Tecnológica Metropolitana en Santiago de Chile y actualmente estoy
          cursando el último año de la carrera. A lo largo de mi formación, me
          estoy especializando en el desarrollo de aplicaciones web y móviles,
          ampliando mis conocimientos en áreas relacionadas con la gestión de
          proyectos. Quiero seguir expandiendo mis habilidades técnicas y de
          gestión en entornos reales. Mi objetivo es desarrollar nuevos
          proyectos y contribuir a los ya existentes, promoviendo la eficiencia
          y la evolución digital para aportar en los avances tecnologicos,
          aprendiendo de cada experiencia y perfeccionando continuamente mi
          capacidad para resolver problemas de manera eficaz y creativa.
        </p>
      </div>
      <div className="button-cv">
        <a
          href="/assets/files/CV_JRS.pdf"
          download="CV_JRS.pdf"
          className="download-cv-button"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
