import React from "react";
import "../css/Proyectos.css";
import githubIcon from '../assets/images/github.png';
import multibateriasImg from "../assets/images/multibaterias.png";
import ruta5Img from "../assets/images/ruta5.jpg"; // Asegúrate de que la ruta sea correcta
import construtemImg from "../assets/images/software2Img.png";

interface Proyecto {
  titulo: string;
  descripcion: string[];
  tecnologias: string[];
  imagen: string;
  githubUrl: string;
}

const ProyectosDestacados: React.FC = () => {
  const proyectos: Proyecto[] = [
    {
      titulo: "Multibaterias Website",
      descripcion: [
        "Diseño de arquitectura de software para la pyme en formato digital.",  
        "Desarrollo completo de Frontend, Backend y Bases de Datos.",
        "Sistema de Consultas, Login, Agendamiento de Citas y Presupuestos."
      ],
      tecnologias: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
      imagen: multibateriasImg,
      githubUrl: "https://github.com/HarrySevenVader/MultibateriasUltimate.git",
    },
    {
      titulo: "Ruta 5",
      descripcion: [
        "Aplicación móvil construida con Flutter.",
        "Permite iniciar sesión con Google usando Firebase Authentication.",
        "Consume una API de restaurant y una API REST propia para cargar datos de restaurantes y menús.",
        "Califica los platos y comenta sobre ellos."
      ],
      tecnologias: ["Flutter", "Firebase Auth", "API Rest", "Google Sign-In"],
      imagen: ruta5Img,
      githubUrl: "https://github.com/HarrySevenVader/Ruta-5-.git", // URL del repo xd
    },
    {
      titulo: "Construtem",
      descripcion: [
        "Plataforma web para la gestión de ventas, facturación e inventario/despacho.",
        "Proyecto académico colaborativo entre células.",
        "Incluye sistema de ventas, sistema de pago y sistema de administración."
      ],
      tecnologias: ["Next.JS", "Golang", "PostgreSQL"],
      imagen: construtemImg,
      githubUrl: "https://github.com/Construtem",
    }
  ];

  return (
    <section className="proyectos">
      <h2>Mis Proyectos</h2>
      <p className="servicios-intro">
        Proyectos de software desarrollados como respaldo técnico de mi trabajo, con acceso directo a sus repositorios en GitHub.
      </p>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            {/* Imagen del Proyecto */}
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="proyecto-imagen"
            />      
            {/* Información del Proyecto */}
            <h3>{proyecto.titulo}</h3>
            <ul>
              {proyecto.descripcion.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>Tecnologías: {proyecto.tecnologias.join(", ")}</p>
            {/* Enlace a GitHub */}
            <div className="github-link">
              <a
                href={proyecto.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectosDestacados;
