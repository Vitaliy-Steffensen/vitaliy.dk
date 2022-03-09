import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./RecentProject.css";
import "./offset-card-grid.css";
import { projects } from "./projects";
import ProjectCard from "./components/NewProjectCard";

export default function RecentProjects() {
  return (
    <TimelinePage title="Most recent project" link="recent-project">
      <div className="project-cards-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </TimelinePage>
  );
}
