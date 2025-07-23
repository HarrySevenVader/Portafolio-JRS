import React from 'react';
import '../css/Abilities.css';
import python from '../assets/images/python-logo.png';
import cplus from '../assets/images/cplus.png';
import js from '../assets/images/javascript.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import mysql from '../assets/images/mysql.png';
import postgresql from '../assets/images/postgresql.png';

const Abilities: React.FC = () => {
  const skills = [
    { name: 'Python', image: python },
    { name: 'C / C++', image: cplus },
    { name: 'JavaScript', image: js },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'MySQL', image: mysql },
    { name: 'PostgreSQL', image: postgresql},
  ];

  return (
    <section className="habilidades">
      <h2 className="habilidades-title">Tecnologias</h2>
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

export default Abilities;