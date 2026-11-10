import { links } from "../data/portfolio";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a className="footer-wordmark" href="#inicio" aria-label="Jarol Riquelme, ir al inicio">
            <span aria-hidden="true">&gt;_</span> Jarol <strong>Riquelme</strong>
          </a>
          <p className="footer-note">© {new Date().getFullYear()} · Software y análisis de datos.</p>
          <nav className="footer-navigation" aria-label="Enlaces del footer">
            <a href={links.cv} download aria-label="Descargar CV en PDF">CV</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Jarol Riquelme (abre en otra pestaña)">GitHub</a>
            <a href={links.email}>Correo</a>
            <a href="#inicio" aria-label="Volver al inicio">Inicio <span aria-hidden="true">↑</span></a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
