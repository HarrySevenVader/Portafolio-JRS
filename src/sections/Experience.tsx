import { SectionHeading } from "../components/SectionHeading";
import { roles } from "../data/portfolio";
// Estilos css personalizados.
import "../styles/experience.css";

export function Experience() {
  return (
    <section
      className="content-section experience-section"
      id="experiencia"
      aria-label="Experiencia profesional"
    >
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Experiencia profesional"
          title={
            <>
              Trabajo en <em>contexto.</em>
            </>
          }
          description="Calidad de datos, automatización y análisis aplicados al negocio."
        />

        <div className="experience-cards">
          {roles.map((role) => (
            <article
              className="experience-card"
              key={role.id}
              aria-labelledby={`experience-title-${role.id}`}
              data-company={role.id}
            >
              {/* Cabecera: logo, cargo y período */}
              <header className="experience-card-header">
                <div className="experience-brand">
                  <img
                    src={role.logoUrl}
                    alt={role.organization}
                    width="200"
                    height="200"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="experience-position">
                  <h3 id={`experience-title-${role.id}`}>
                    {role.title}
                  </h3>

                  {role.department && (
                    <p className="experience-department">
                      {role.department}
                    </p>
                  )}
                </div>

                <div className="experience-tenure">
                  <p className="experience-dates">
                    {role.period}
                  </p>

                  <p className="experience-contract">
                    {role.duration} · {role.employmentType}
                  </p>
                </div>
              </header>

              {/* Contenido: empresa, funciones y resultados */}
              <div className="experience-card-body">
                <div className="experience-company">
                  <p className="experience-company-description">
                    {role.description}
                  </p>
                </div>

                <div className="experience-functions">
                  <h4 className="experience-block-title">
                    Mi aporte
                  </h4>

                  <ul className="experience-responsibilities">
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-results">
                  <h4 className="experience-block-title">
                    Resultados
                  </h4>

                  <ul className="experience-achievements">
                    {role.achievements.map((achievement) => (
                      <li
                        className="experience-achievement"
                        key={achievement.id}
                      >
                        <p className="experience-achievement-detail">
                          <strong className="experience-achievement-label">
                            {achievement.label} ({achievement.value}).
                          </strong>{" "}
                          {achievement.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
