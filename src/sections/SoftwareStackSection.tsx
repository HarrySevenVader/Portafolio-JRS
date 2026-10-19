import { SectionHeading } from "../components/SectionHeading";

export function SoftwareStackSection() {
  return (
    <section className="content-section stack-section" id="desarrollo" aria-label="Stack de software">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Stack de software"
          title="Herramientas para construir."
        />
      </div>
    </section>
  );
}
