import React, { useState } from "react";
import "../css/Servicios.css";
import logoGustito from "../assets/images/logo-gustito.jpg";
import logoGyd from "../assets/images/logo-gyd.jpg";

interface Servicio {
  id: number;
  logo: string;
  alt: string;
  titulo: React.ReactNode;
  descripcion: string[];
  url: string;
  gradiente: string;
  hoverColor: string;
}

const servicios: Servicio[] = [
  {
    id: 1,
    logo: logoGustito,
    alt: "El Gustito Restaurant",
    titulo: (
      <>
        <span style={{ color: "#FF8C42" }}>Gustito</span> - Sabores que te dan
        un <span style={{ color: "#8BC34A" }}>Gustito</span>
      </>
    ),
    descripcion: [
      "Sitio web del restaurante Gustito con locales en Maipú, Talagante y Huechuraba.",
      "Descubre su carta de comida artesanal, sándwiches, tablas, empanadas y más. Consulta horarios, ubicaciones y realiza pedidos desde la comodidad de tu hogar.",
    ],
    url: "https://el-gustito.vercel.app/",
    gradiente:
      "linear-gradient(135deg, #1a1a1a 0%, #2d2323 50%, #1a1a1a 100%)",
    hoverColor: "#68a7ff",
  },
  {
    id: 2,
    logo: logoGyd,
    alt: "Óptica GYD",
    titulo: (
      <>
        <span style={{ color: "#fff" }}>Óptica</span>{" "}
        <span style={{ color: "#E53935" }}>GYD</span>
      </>
    ),
    descripcion: [
      "Sitio web de Óptica GYD, especialistas en lentes ópticos, lentes de sol y salud visual.",
      "Encuentra variedad de marcos, cristales con medida, lentes de contacto y asesoría personalizada para el cuidado de tu visión. Atención cercana y productos de calidad para toda la familia.",
    ],
    url: "https://opticagyd.vercel.app/",
    gradiente:
      "linear-gradient(135deg, #1a1a1a 0%, #1a2a2d 50%, #1a1a1a 100%)",
    hoverColor: "#4FC3F7",
  },
];

const Servicios: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? servicios.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === servicios.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="servicios" id="servicios">
      <div className="servicios-header">
        <h2>MIS SERVICIOS</h2>
        <p className="servicios-intro">
          Diseño e implementación de soluciones web profesionales en
          infraestructura cloud escalable.
        </p>
      </div>

      <div className="servicios-slider">
        <button
          className="servicios-arrow"
          onClick={handlePrev}
          aria-label="Anterior"
        >
          &#8249;
        </button>

        <div className="servicios-cards">
          {servicios.map((servicio, index) => (
            <div
              className={`servicio-card ${index === current ? "active" : ""}`}
              key={servicio.id}
              style={
                {
                  background: servicio.gradiente,
                  "--hover-color": servicio.hoverColor,
                } as React.CSSProperties
              }
            >
              <div className="servicio-img">
                <img src={servicio.logo} alt={servicio.alt} />
              </div>
              <div className="servicio-info">
                <h3>{servicio.titulo}</h3>
                <div className="servicio-desc">
                  {servicio.descripcion.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href={servicio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="servicio-link"
                >
                  <span>Visitar Sitio Web</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className="servicios-arrow"
          onClick={handleNext}
          aria-label="Siguiente"
        >
          &#8250;
        </button>
      </div>

      <div className="servicios-dots">
        {servicios.map((_, index) => (
          <button
            key={index}
            className={`servicios-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
