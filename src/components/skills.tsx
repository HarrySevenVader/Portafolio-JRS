import React from 'react';
import '../css/skills.css'; // Asegúrate de que la ruta sea correcta

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">Habilidades Computacionales</h2>
      <ul className="skills-list">
        <li className="skill">
          Desarrollo de interfaces web modernas utilizando frameworks como React, Vite y Next.js.
        </li>
        <li className="skill">
          Desarrollo de aplicaciones backend utilizando frameworks como Django y Flask en Python, experiencia básica con Go, y manejo de conexiones a endpoints de APIs para integración y consumo de servicios.
        </li>
        <li className="skill">
          Conocimientos prácticos en bases de datos relacionales, especialmente en MySQL y PostgreSQL, incluyendo manejo y administración mediante herramientas como DBeaver.
        </li>
        <li className="skill">
          Desarrollo básico de interfaces móviles utilizando Flutter para crear aplicaciones multiplataforma de manera eficiente.
        </li>
        <li className="skill">
          Manejo de control de versiones con Git y GitHub, experiencia en integración y despliegue continuo, uso de servicios como Firebase para autenticación y bases de datos en tiempo real, consumo y creación de APIs, así como conocimientos básicos en contenedores Docker para desarrollo y despliegue de aplicaciones.
        </li>
        <li className="skill">
          Competencia intermedia en el uso de herramientas de Microsoft Office, incluyendo Excel, PowerPoint y Word, para la gestión, análisis y presentación de información.
        </li>
      </ul>
    </section>
  );
};

export default Skills;
