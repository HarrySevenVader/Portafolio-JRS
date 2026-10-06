import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { StackSection } from "./sections/StackSection";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { dataStack, developmentStack } from "./data/portfolio";

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Header />

      <main id="contenido">
        <Home />
        <Projects />
        <StackSection
          id="desarrollo"
          number="03"
          eyebrow="Stack de desarrollo"
          title="Herramientas para construir."
          description="Tecnologías que utilizo para crear interfaces, conectar servicios y dar forma a productos web."
          groups={developmentStack}
        />
        <StackSection
          id="datos"
          number="04"
          eyebrow="Stack de datos"
          title="Herramientas para entender."
          description="Recursos para preparar información, analizarla y convertirla en decisiones más claras."
          groups={dataStack}
        />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
