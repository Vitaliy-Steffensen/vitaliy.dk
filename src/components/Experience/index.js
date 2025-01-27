import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import ExperienceTitle from "./components/ExperienceTitle";
import "./Experience.css";
import ExperienceTask from "./components/ExperienceTask";
import { experiences } from "./ExperienceData";
import InternalButton from "../elements/InternalButton";
import ResumeButton from "../elements/ResumeButton";
import T from "../../utils/translations/TranslatedText/index.js";

export default function Experience() {
  return (
    <TimelinePage title="Experience" link="experience">
      <div className="experience">
        {experiences?.map((job, i) => (
          <React.Fragment key={i}>
            <ExperienceTitle
              img={job.img}
              title={job.title}
              fromDate={job.fromDate}
              toDate={job.toDate}
            />
            {job.tasks?.map((task, i) => (
              <ExperienceTask
                img={task.img}
                video={task.video}
                title={task.title}
                description={task.description}
                left={Math.abs(i) % 2 === 1}
                key={i}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="experience__download">
        <T>Download the</T>
        <ResumeButton
          style={{
            color: "#242424",
            background: "transparent",
            padding: "4px 8px",
            fontSize: "1.3rem",
            margin: "0px 2px",
          }}
        />
        <T>to see the full list.</T>
      </div>
    </TimelinePage>
  );
}
