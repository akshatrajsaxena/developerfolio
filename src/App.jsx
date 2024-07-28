import styles from "./App.module.css";
import { About } from "./components/About/About.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Achievements } from "./components/achievements/achievements.jsx";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
