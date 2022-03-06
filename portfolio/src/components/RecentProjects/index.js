import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./RecentProject.css";
import "./offset-card-grid.css";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";

export default function RecentProjects() {
  return (
    <TimelinePage
      title="Most recent projects"
      link="recent-project"
      contentMargin={200}
    >
      <div className="project-cards-grid">
        {projects.map((project, i) => (
          <ProjectCard
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
