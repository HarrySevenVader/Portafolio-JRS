import React from 'react';
import '../css/skills.css'; // Asegúrate de que la ruta sea correcta

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">Habilidades Computacionales</h2>
      <ul className="skills-list">
        <li className="skill">
          Desarrollo de interfaces web modernas con React, TypeScript, Vite y Next.js, aplicando diseño responsivo, componentización y buenas prácticas de UI/UX.
        </li>
        <li className="skill">
          Desarrollo backend con Python (Django, Flask), Golang y Express.js, incluyendo creación y consumo de APIs REST para integración de servicios.
        </li>
        <li className="skill">
          Gestión de bases de datos relacionales con PostgreSQL y MySQL, incluyendo diseño de esquemas, consultas optimizadas y administración mediante herramientas como DBeaver.
        </li>
        <li className="skill">
          Desarrollo de aplicaciones móviles multiplataforma con Flutter, integrando autenticación con Firebase Auth y Google Sign-In, y consumo de APIs externas.
        </li>
        <li className="skill">
          Despliegue y hosting de aplicaciones en servicios cloud como Firebase Hosting, Vercel, Render y Supabase, con experiencia en configuración de entornos de producción.
        </li>
        <li className="skill">
          Control de versiones con Git y GitHub, nociones de CI/CD, uso básico de contenedores Docker, y familiaridad con Google Cloud Platform.
        </li>
        <li className="skill">
          Análisis de datos e informes con herramientas de Microsoft Office (Excel, PowerPoint, Word), con experiencia práctica como Analista de Datos.
        </li>
        <li className="skill">
          Estilizado web con CSS puro y Tailwind CSS, maquetación con Flexbox y Grid, y uso de librerías como Font Awesome y React Router para navegación SPA.
        </li>
      </ul>
    </section>
  );
};

export default Skills;
