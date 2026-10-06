import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section className="content-section" id="proyectos" aria-label="Proyectos publicados">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Proyectos publicados"
          title="Trabajo que ya está en línea."
          description="Una selección breve de sitios que pueden explorarse hoy. Cada uno responde a una necesidad distinta."
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span className="row-number">0{index + 1}</span>
              <div className="project-content">
                <p className="project-kind">{project.kind}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul className="plain-tags" aria-label="Tecnologías utilizadas">
                  {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
              <a className="project-visit" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar el sitio de ${project.name}`}>
                Visitar sitio <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
