import React from "react";
import "./AboutMe.css";
import TimelinePage from "../Templates/TimelinePage";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <TimelinePage title="About me" link="about" contentMargin={220}>
        <p className="AboutMe__paragraph">
          {"<! --- As a dedicated developer, I've built anything from video " +
            "games to computer software. Now my passion lies in website " +
            "development. I have been programming longer than I can remember " +
            "and have always admired the startup and scale-up industry. --->"}
        </p>
      </TimelinePage>
    </div>
  );
}
