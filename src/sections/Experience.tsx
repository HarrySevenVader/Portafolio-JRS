import { SectionHeading } from "../components/SectionHeading";
import { roles } from "../data/portfolio";

export function Experience() {
  return (
    <section className="content-section" id="experiencia">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Experiencia profesional"
          title="Trabajo en contexto."
          description="Experiencias recientes donde datos, procesos y herramientas digitales se encontraron."
        />
        <div className="experience-list">
          {roles.map((role) => (
            <article className="experience-row" key={role.organization}>
              <p className="experience-period">{role.period}</p>
              <div>
                <h3>{role.title}</h3>
                <p className="experience-organization">{role.organization}</p>
              </div>
              <p className="experience-description">{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
