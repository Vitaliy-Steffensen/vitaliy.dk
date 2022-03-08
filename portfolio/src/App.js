import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GreetingsPopup from "./components/GreetingsPopup";
import HeroSection from "./components/HeroSection";
import NavMenu from "./components/NavMenu";
import NewNavMenu from "./components/NewNavMenu";
import RecentProjects from "./components/RecentProjects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <GreetingsPopup />
      <NewNavMenu />
      <HeroSection />
      <AboutMe />
      <Experience />
      <RecentProjects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
