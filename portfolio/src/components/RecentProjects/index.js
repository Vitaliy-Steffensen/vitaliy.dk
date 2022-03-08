import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./RecentProject.css";
import "./offset-card-grid.css";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";

export default function RecentProjects() {
  return (
    <TimelinePage title="Most recent project" link="recent-project">
      <div className="project-cards-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            number={(i += 1)}
            title={project.title}
            demoLink={project.demoLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </TimelinePage>
  );
}
