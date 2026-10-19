import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { StackSection } from "./sections/StackSection";
import { SoftwareStackSection } from "./sections/SoftwareStackSection";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { dataStack } from "./data/portfolio";

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Header />

      <main id="contenido">
        <Home />
        <Projects />
        <SoftwareStackSection />
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
