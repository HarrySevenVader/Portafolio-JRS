import { links } from "../data/portfolio";

export function Home() {
  return (
    <section className="home-section" id="inicio" aria-labelledby="home-title">
      <div className="container">
        <div className="home-grid">
          <div className="home-copy">
            <p className="overline">Portafolio personal / 2026</p>
            <h1 id="home-title">Software claro.<br /><em>Datos que sirven.</em></h1>
            <p className="home-intro">
              Soy Jarol Riquelme, ingeniero en Informática. Desarrollo productos digitales y trabajo con datos para hacer más simples los procesos cotidianos.
            </p>
            <div className="text-actions">
              <a href="#proyectos">Explorar proyectos <span aria-hidden="true">↗</span></a>
              <a href={links.email}>Escribirme <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="profile-sheet" aria-label="Perfil resumido">
            <div className="profile-sheet-top"><span>Perfil</span><span>01 / JR</span></div>
            <div className="profile-monogram" aria-hidden="true">JR.</div>
            <div className="profile-sheet-bottom">
              <strong>Jarol Riquelme</strong>
              <span>Ingeniero en Informática</span>
              <span>Santiago, Chile</span>
            </div>
          </aside>
        </div>

        <div className="home-details" id="perfil">
          <div className="about-copy">
            <p className="section-label"><span>01</span> / Sobre mí</p>
            <h2>Me interesa que una solución se entienda y se pueda mantener.</h2>
            <p>
              Combino desarrollo de software, automatización y análisis de datos. Mi punto de partida es conocer el problema, ordenar la información y construir con criterio.
            </p>
          </div>

          <div className="practice-list" aria-label="A qué me dedico">
            <p className="section-label">A qué me dedico</p>
            <div><span>01</span><strong>Desarrollo web</strong><p>Interfaces y servicios para proyectos reales.</p></div>
            <div><span>02</span><strong>Automatización</strong><p>Menos trabajo manual en procesos repetitivos.</p></div>
            <div><span>03</span><strong>Análisis de datos</strong><p>Información confiable para tomar decisiones.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
