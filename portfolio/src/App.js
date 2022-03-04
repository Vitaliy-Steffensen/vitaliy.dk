import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GreetingsPopup from "./components/GreetingsPopup";
import HeroSection from "./components/HeroSection";
import NavMenu from "./components/NavMenu";
import RecentProjects from "./components/RecentProjects";

function App() {
  return (
    <div>
      <GreetingsPopup />
      <NavMenu />
      <HeroSection />
      <AboutMe />
      <Experience />
      <RecentProjects />
      <Contact />
    </div>
  );
}

export default App;
