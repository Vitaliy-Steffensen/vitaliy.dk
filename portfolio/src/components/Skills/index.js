import React from "react";
import T from "../../utils/translations/TranslatedText/index.js";
import Card from "../elements/Card";
import TimelinePage from "../Templates/TimelinePage";
import "./Skills.css";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <TimelinePage title="Tech stack & skills" link="skills">
      <div className="skills__container">
        <div className="skills__card-grid">
          {skills.map((skill, skillIndex) => (
            <Card key={skillIndex} title={skill.area} titleUnderline>
              {skill.skills.map((record, recordIndex) => (
                <p key={recordIndex} className="skill__property">
                  <T>{record}</T>
                </p>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </TimelinePage>
  );
}
