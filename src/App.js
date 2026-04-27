import { useEffect } from "react";

import useReveal from "./hooks/useReveal";

import Navbar from "./components/Navbar/Navbar";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import GitHubGraph from "./components/GitHubGraph/GitHubGraph";
import CurrentlyLearning from "./components/CurrentlyLearning/CurrentlyLearning";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useReveal();

  return (
    <>
      <CommandPalette toggleTheme={() => {}} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubGraph />
        <CurrentlyLearning />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
