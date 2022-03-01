import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GreetingsPopup from "./components/GreetingsPopup";
import HeroSection from "./components/HeroSection";
import NavMenu from "./components/NavMenu";
import RecentProject from "./components/RecentProject";

function App() {
  return (
    <div>
      <GreetingsPopup />
      <NavMenu />
      <HeroSection />
      <AboutMe />
      <Experience />
      <RecentProject />
      <Contact />
    </div>
  );
}

export default App;
