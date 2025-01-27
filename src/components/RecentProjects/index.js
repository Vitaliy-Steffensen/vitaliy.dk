import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./RecentProject.css";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";

export default function RecentProjects() {
  return (
    <TimelinePage
      title="Most recent projects"
      link="recent-projects"
      allowOverflow
    >
      <div className="project-cards-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </TimelinePage>
  );
}
