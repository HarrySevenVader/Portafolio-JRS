import { SectionHeading } from "../components/SectionHeading";
import { ProjectFlowDiagram } from "../components/ProjectFlowDiagram";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section className="content-section projects-section" id="proyectos" aria-label="Proyectos publicados">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Proyectos publicados"
          title="Trabajo que ya está en línea"
          description="Una selección breve de sitios que pueden explorarse hoy. Cada uno responde a una necesidad distinta."
        />

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
      </div>
    </section>
  );
}
