import React from "react";
import "./ProjectCard.css";
import ExternalButton from "../../../elements/ExternalButton";

export default function ProjectCard({ number, title, demoLink, projectLink }) {
  return (
    <div className="project-card">
      <span className="project-card__number" aria-hidden="true">
        / {number}
      </span>
      <div className="project-card__content-container">
        <h2 className="project-card__title">{title}</h2>
        <div className="project-card__buttons-container">
          <ExternalButton
            title="Specs"
            link={projectLink}
            backgroundColor="#DE4721"
            color="#fff"
          />
          <ExternalButton
            title="Demo"
            link={demoLink}
            backgroundColor="#DE4721"
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
}
