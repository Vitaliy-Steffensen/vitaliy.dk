import React from "react";
import Card from "../elements/Card";
import TimelinePage from "../Templates/TimelinePage";
import "./Skills.css";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <TimelinePage title="Textstack & skills" link="skills">
      <div className="skills__container">
        <div className="skills__card-grid">
          {skills.map((skill, skillIndex) => (
            <Card key={skillIndex} title={skill.area} titleUnderline>
              {skill.skills.map((record, recordIndex) => (
                <p key={recordIndex} className="skill__property">
                  {record}
                </p>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </TimelinePage>
  );
}
