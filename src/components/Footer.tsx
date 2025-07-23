import React from 'react';
import '../css/Footer.css';
import emailIcon from '../assets/images/email.png';
import phoneIcon from '../assets/images/phone.png';
import locationIcon from '../assets/images/R.png';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedin.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <h4 className="footer-title">Contacto</h4>
      <div className="footer-info">
        <span>
          <img src={emailIcon} alt="Correo" className="footer-icon" />
          jriquelme.harrysev@gmail.com
        </span>
        <span>
          <img src={phoneIcon} alt="Teléfono" className="footer-icon" />
          +56 9 9009 6207
        </span>
        <span>
          <img src={locationIcon} alt="Ubicación" className="footer-icon" />
          Santiago, Chile
        </span>
      </div>
      <div className="footer-social">
        <a
          href="https://github.com/HarrySevenVader"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="footer-icon" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jarol-riquelme-santiba%C3%B1ez-71bb37338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
