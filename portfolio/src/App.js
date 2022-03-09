import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GreetingsPopup from "./components/GreetingsPopup";
import HeroSection from "./components/HeroSection";
import NavMenu from "./components/NavMenu";
import RecentProjects from "./components/RecentProjects";
import Skills from "./components/Skills";
import { useWindowSize } from "./Hooks/useWindowSize";

function App() {
  const { width } = useWindowSize();
  const [commentMounted, setCommentMounted] = useState(false);

  const sillyComment =
    "\n" +
    "###    #######        ###   #######\n" +
    " #        #            #    #\n" +
    " #        #            #    #######\n" +
    " #        #            #          #\n" +
    "###       #           ###   #######" +
    "\n";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!commentMounted && width < 768 && width > 0) {
      document.body.appendChild(document.createComment(sillyComment));
      setCommentMounted(true);
    }
  }, [width]);

  return (
    <div>
      <GreetingsPopup />
      <NavMenu />
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
