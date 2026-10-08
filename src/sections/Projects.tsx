import { useEffect, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectFlowDiagram } from "../components/ProjectFlowDiagram";
import { projects, repositoryProjects } from "../data/portfolio";
import "../styles/projects-pagination.css";

type ProjectPage = 0 | 1;
type RevealDirection = "forward" | "backward";
type PageTransition = { from: ProjectPage; direction: RevealDirection };

function setInert(element: HTMLDivElement | null, inert: boolean) {
  element?.toggleAttribute("inert", inert);
}

const pageCopy = [
  {
    eyebrow: "Proyectos publicados",
    title: "Trabajo que ya está en línea",
    description: "Una selección breve de sitios que pueden explorarse hoy. Cada uno responde a una necesidad distinta.",
    tab: "Publicados",
  },
  {
    eyebrow: "Proyectos en repositorio",
    title: "Código para explorar",
    description: "Estos proyectos aún no tienen un sitio publicado. Aquí compartiré sus repositorios para mostrar cómo están construidos y cómo evolucionan.",
    tab: "Repositorios",
  },
] as const;

function PublishedProjects() {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article className="project-row" key={project.name}>
          <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-content">
            <p className="project-kind">{project.kind}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul className="plain-tags" aria-label="Tecnologías utilizadas">
              {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
            <a className="project-visit" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar el sitio de ${project.name} (se abre en otra pestaña)`}>
              Visitar sitio <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ProjectFlowDiagram id={`project-flow-${index + 1}`} journey={project.journey} />
        </article>
      ))}
    </div>
  );
}

function RepositoryProjects() {
  const entries = Array.from(
    { length: Math.max(2, repositoryProjects.length) },
    (_, index) => repositoryProjects[index] ?? null,
  );

  return (
    <div className="project-list repository-list">
      {entries.map((project, index) => (
        <article className="project-row repository-row" key={project?.repositoryUrl ?? `empty-${index}`}>
          <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-content">
            <p className="project-kind">{project?.kind ?? "Proyecto de repositorio"}</p>
            <h3>{project?.name ?? "Por presentar"}</h3>
            <p>{project?.summary ?? "Pronto compartiré el código y los detalles de este proyecto."}</p>
            {project && (
              <>
                <ul className="plain-tags" aria-label="Tecnologías utilizadas">
                  {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
                <a className="project-visit" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver el repositorio de ${project.name} (se abre en otra pestaña)`}>
                  Ver repositorio <span aria-hidden="true">↗</span>
                </a>
              </>
            )}
          </div>
          <div className="repository-panel" aria-hidden="true">
            <span className="repository-panel-label">// REPOSITORIO</span>
            <span className="repository-panel-mark">&lt;/&gt;</span>
            <span className="repository-panel-status">{project ? "CÓDIGO DISPONIBLE" : "EN PREPARACIÓN"}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectPageContent({ pageIndex }: { pageIndex: ProjectPage }) {
  const page = pageCopy[pageIndex];

  return (
    <>
      <SectionHeading number="02" eyebrow={page.eyebrow} title={page.title} description={page.description} />
      {pageIndex === 0 ? <PublishedProjects /> : <RepositoryProjects />}
    </>
  );
}

export function Projects() {
  const [activePage, setActivePage] = useState<ProjectPage>(0);
  const [transition, setTransition] = useState<PageTransition | null>(null);

  useEffect(() => {
    if (!transition) return;

    // Respaldo por si el navegador cancela la animación antes de emitir animationend.
    const timeout = window.setTimeout(() => setTransition(null), 800);
    return () => window.clearTimeout(timeout);
  }, [transition]);

  function selectPage(nextPage: ProjectPage) {
    if (nextPage === activePage || transition) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTransition(reducedMotion ? null : {
      from: activePage,
      direction: nextPage > activePage ? "forward" : "backward",
    });
    setActivePage(nextPage);
  }

  return (
    <section className="content-section projects-section" id="proyectos" aria-label="Proyectos">
      <div className="container">
        <nav className="project-pagination" aria-label="Páginas de proyectos">
          <span className="project-pagination-count">Colección / 0{activePage + 1} de 02</span>
          <div className="project-pagination-options">
            {pageCopy.map((option, index) => (
              <button
                className="project-pagination-button"
                type="button"
                key={option.tab}
                aria-current={activePage === index ? "page" : undefined}
                aria-controls="projects-page-content"
                onClick={() => selectPage(index as ProjectPage)}
              >
                <span>0{index + 1}</span> {option.tab}
              </button>
            ))}
          </div>
        </nav>

        <div className="projects-stage" id="projects-page-content">
          {transition && (
            <div
              className={`projects-page projects-page--outgoing projects-page--outgoing-${transition.direction}`}
              aria-hidden="true"
              ref={(element) => setInert(element, true)}
            >
              <ProjectPageContent pageIndex={transition.from} />
            </div>
          )}
          <div
            className={transition ? `projects-page projects-page--${transition.direction}` : "projects-page"}
            key={activePage}
            ref={(element) => setInert(element, transition !== null)}
            aria-hidden={transition !== null}
            onAnimationEnd={(event) => {
              if (event.animationName.startsWith("projects-reveal-")) setTransition(null);
            }}
          >
            <ProjectPageContent pageIndex={activePage} />
          </div>
        </div>
      </div>
    </section>
  );
}
