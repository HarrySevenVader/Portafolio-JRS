import React from 'react';
import '../css/Abilities.css';

const frontend = [
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

const backend = [
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Golang', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Django', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Flask', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
];

const bdd = [
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const Abilities: React.FC = () => {
  return (
    <section className="habilidades">
      <h2 className="habilidades-title">TECNOLOGÍAS</h2>

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
    </section>
  );
};

export default Abilities;