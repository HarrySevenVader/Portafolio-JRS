import React from "react";
import { Link } from "react-scroll";
import linkedInIcon from "../assets/images/linkedin.png";
import "../css/Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="profile-title">Jarol Riquelme Santibañez</h1>
        <p className="profile-subtitle">
          Estudiante de Ingeniería en Informática
        </p>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/jarol-riquelme-santiba%C3%B1ez-71bb37338/"
            className="btn btn-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
            LinkedIn
          </a>

          {/* Enlace al Footer usando 'to' con el id correcto */}
          <Link
            to="contact"  // Este 'contact' debe coincidir con el id de Footer
            className="btn btn-contact"
            smooth={true}
            duration={500}
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
