import React from "react";
import Card from "../elements/Card";
import TimelinePage from "../Templates/TimelinePage";
import "./Skills.css";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <TimelinePage title="Textsack & skills" link="skills" contentMargin={200}>
      <div className="skills__container">
        <div className="skills__card-grid">
          {skills.map((skill) => (
            <Card title={skill.area}>
              {skill.skills.map((record) => (
                <p className="skill__property">{record}</p>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </TimelinePage>
  );
}
