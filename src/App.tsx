import Header from "./components/Header";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Abilities from "./components/Abilities";
import Proyectos from "./components/Proyectos";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Header></Header>
      <Profile></Profile>
      <AboutMe></AboutMe>
      <Proyectos />
      <Skills />
      <Abilities />
      <Footer />
    </div>
  );
}

export default App;