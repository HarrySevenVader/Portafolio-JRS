import { useEffect, useState } from "react";
import { links } from "../data/portfolio";
import Portrait from "../styles/assets/e2.jpeg";

const pipelineSteps = ["PUSH", "CHECKOUT", "NPM CI", "LINT + TEST", "BUILD · TS + VITE"];

export function Home() {
  const [flowStep, setFlowStep] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFlowStep(pipelineSteps.length);
      return;
    }

    const timer = window.setInterval(() => {
      setFlowStep((step) => step >= pipelineSteps.length + 1 ? -1 : step + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-section" id="inicio" aria-labelledby="home-title">
      <div className="container">
        <div className="home-grid">
          <div className="home-copy">
            <p className="overline">Portafolio personal / 2026</p>
            <h1 id="home-title">Software claro.<br /><em>Datos que sirven.</em></h1>
            <p className="home-intro">
              Me encantan los videojuegos 🎮 y resolver problemas, creando soluciones eficientes y modernas para todo tipo de proyectos 💻. Experiencia Full-Stack, Móvil, APIs y Análisis de Datos 📱🔧.
            </p>

            <div className="home-signature">
              <strong>Jarol Riquelme Santibañez</strong>
              <span>Desarrollo full stack · análisis de datos · automatización</span>
            </div>

            <div className="home-actions">
              <a className="home-action-primary" href="#proyectos">
                Ver proyectos <span aria-hidden="true">↗</span>
              </a>
              <a
                className="home-action-secondary"
                href="/assets/files/CV_Jarol_Riquelme.pdf"
                download
              >
                Descargar CV <span aria-hidden="true">↓</span>
              </a>
            </div>

            <nav className="home-social" aria-label="Redes profesionales">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Jarol Riquelme (abre en otra pestaña)"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Jarol Riquelme (abre en otra pestaña)"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
            </nav>
          </div>

          <aside className="profile-sheet" aria-label="Perfil profesional de Jarol Riquelme">
            <div className="profile-photo">
              <img
                src={Portrait}
                alt="Fotografía de perfil"
                width="643"
                height="736"
              />
            </div>
            <p className="profile-role-label">Full Stack Developer<br /><span>Data Analyst</span></p>
          </aside>
        </div>

        <div className="delivery-flow" aria-label="Demostración visual de un flujo de integración continua; no muestra ejecuciones reales">
          <span className="delivery-flow-label">CI / GITHUB ACTIONS</span>
          <ol className="delivery-flow-steps">
            {pipelineSteps.map((step, index) => (
              <li
                key={step}
                data-state={index < flowStep ? "done" : index === flowStep ? "active" : "waiting"}
              >
                <span className="delivery-flow-status" aria-hidden="true">
                  {index < flowStep ? "✓" : "○"}
                </span>
                <span>{step}</span>
                {index < pipelineSteps.length - 1 && (
                  <span
                    className="delivery-flow-transfer"
                    data-state={index === flowStep - 1 ? "moving" : index < flowStep - 1 ? "done" : "waiting"}
                    aria-hidden="true"
                  >
                    {[0, 1, 2].map((dot) => (
                      <span className="delivery-flow-dot" key={dot} />
                    ))}
                    <span className="delivery-flow-arrow">→</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
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
