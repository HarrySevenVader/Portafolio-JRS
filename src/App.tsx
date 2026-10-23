import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { StackSection } from "./sections/StackSection";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Header />

      <main id="contenido">
        <Home />
        <Projects />
        <StackSection />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
