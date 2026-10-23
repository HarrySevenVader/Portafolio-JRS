import { SectionHeading } from "../components/SectionHeading";
import { links } from "../data/portfolio";

export function Contact() {
  return (
    <section className="content-section contact-section" id="contacto">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="Contacto"
          title="Conversemos."
          description="Si tienes una idea, una oportunidad o una pregunta sobre mi trabajo, puedes escribirme."
        />
        <div className="contact-links">
          <a href={links.email}><span>Correo</span><strong>jriquelme.harrysev@gmail.com</strong><span aria-hidden="true">↗</span></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Jarol Riquelme</strong><span aria-hidden="true">↗</span></a>
          <a href={links.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>@HarrySevenVader</strong><span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
