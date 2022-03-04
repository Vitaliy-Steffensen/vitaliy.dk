import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import ExperienceTitle from "./components/ExperienceTitle";
import "./Experience.css";
import ExperienceTask from "./components/ExperienceTask";
import { experiences } from "./ExperienceData";

export default function Experience() {
  return (
    <TimelinePage title="experience" link="experience" contentMargin={200}>
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
                title={task.title}
                description={task.description}
                left={Math.abs(i) % 2 === 1}
                key={i}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </TimelinePage>
  );
}
