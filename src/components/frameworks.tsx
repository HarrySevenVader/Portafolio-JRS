import React from 'react';
import '../css/Abilities.css';
import reactJS from '../assets/images/react.png';
import django from '../assets/images/django-logo.png';
import flask from '../assets/images/flask.png';
import tailwind from '../assets/images/tailwind.png';
import nextJS from '../assets/images/next.jpeg';

const Frameworks: React.FC = () => {
  const skills = [
    { name: 'React.JS', image: reactJS },
    { name: 'Next.JS', image: nextJS },
    { name: 'Django', image: django },
    { name: 'Flask', image: flask },
    { name: 'TailwindCSS', image: tailwind },
    { name: 'Flutter', image: 'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png' },
  ];

  return (
    <section className="habilidades">
      <h2 className="habilidades-title">Frameworks</h2>
      <div className="habilidades-list">
        {skills.map((skill, index) => (
          <span key={index} className="habilidad">
            {skill.image && <img src={skill.image} alt={`${skill.name} logo`} className="habilidad-logo" />}
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Frameworks;