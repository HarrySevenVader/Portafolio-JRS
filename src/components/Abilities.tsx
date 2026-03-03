import React from 'react';
import '../css/Abilities.css';
import expressLogo from '../assets/images/express.png';
import nextLogo from '../assets/images/next.png';
import vercelLogo from '../assets/images/Vercel-Logo.png';
import renderLogo from '../assets/images/Render.png';
import supabaseLogo from '../assets/images/Supabase.png';
import firebaseLogo from '../assets/images/Firebase.png';
import gcpLogo from '../assets/images/GCP.png';
import goLogo from '../assets/images/go.png';
import angularLogo from '../assets/images/angular.png';
import owaspLogo from '../assets/images/owasp.png';

const frontend = [
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next', image: nextLogo },
  { name: 'Angular', image: angularLogo },
  { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Tailwind', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

const backend = [
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Golang', image: goLogo },
  { name: 'Express', image: expressLogo },
];

const bdd = [
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const hosting = [
  { name: 'Vercel', image : vercelLogo },
  { name: 'Render', image: renderLogo },
  { name: 'Supabase', image: supabaseLogo },
  { name: 'Firebase', image: firebaseLogo },
  { name: 'Google Cloud Platform', image: gcpLogo },  
];

const devops = [
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub Actions', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
];

const testing = [
  { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Selenium', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
  { name: 'OWASP ZAP', image: owaspLogo },
];

const Abilities: React.FC = () => {
  return (
    <section className="habilidades">
      <h2 className="habilidades-title">TECNOLOGÍAS UTILIZADAS</h2>
      <h3 className="habilidades-subtitle">Frontend</h3>
      <div className="habilidades-list">
        {frontend.map((skill, index) => (
          <span key={index} className="habilidad">
            <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />
            {skill.name}
          </span>
        ))}
      </div>

      <h3 className="habilidades-subtitle">Backend</h3>
      <div className="habilidades-list">
        {backend.map((skill, index) => (
          <span key={index} className="habilidad">
            <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />
            {skill.name}
          </span>
        ))}
      </div>

      <h3 className="habilidades-subtitle">Bases de Datos</h3>
      <div className="habilidades-list">
        {bdd.map((skill, index) => (
          <span key={index} className="habilidad">
            <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />
            {skill.name}
          </span>
        ))}
      </div>

      <h3 className="habilidades-subtitle">Cloud</h3>
      <div className="habilidades-list">
        {hosting.map((skill, index) => (
          <span key={index} className="habilidad">
            <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />
            {skill.name}
          </span>
        ))}
      </div>

      <h3 className="habilidades-subtitle">DevOps & CI/CD</h3>
      <div className="habilidades-list">
        {devops.map((skill, index) => (
          <span key={index} className="habilidad">
            <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />
            {skill.name}
          </span>
        ))}
      </div>

      <h3 className="habilidades-subtitle">Testing & Seguridad</h3>
      <div className="habilidades-list">
        {testing.map((skill, index) => (
          <span key={index} className="habilidad">
            <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Abilities;