import React, { useRef } from "react";
import "./AboutMe.css";
import TimelinePage from "../Templates/TimelinePage";
import { useLocalScrollFraction } from "../../Hooks/useLocalScrollFraction";
import TypeWriter from "../elements/TypeWriter";

export default function AboutMe() {
  const textRef = useRef();
  const localScrollFraction = useLocalScrollFraction(textRef);

  const texts = [
    "As a developer",
    "As a dedicated developer, I've built anything from video " +
      "games to computer software. Now my passion lies in website " +
      "development. I have been programming longer than I can remember " +
      "and have always admired the startup and scale-up industry.",
  ];

  return (
    <TimelinePage title="About me" link="about">
      <div className="AboutMe__container" ref={textRef}>
        {localScrollFraction > 0.05 && (
          <div className="AboutMe__paragraph">
            <span style={{ color: "#DE4721" }}>{"// "}</span>
            <TypeWriter texts={texts} />
          </div>
        )}
      </div>
    </TimelinePage>
  );
}
