import React from "react";
import { Link } from "react-scroll";
import "../css/Header.css"; // Importa los estilos del header

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">JRS</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="aboutme-container" smooth={true} duration={500}>Sobre Mí</Link></li>
          <li><Link to="servicios" smooth={true} duration={500}>Servicios</Link></li>
          <li><Link to="proyectos" smooth={true} duration={500}>Proyectos</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Habilidades</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;