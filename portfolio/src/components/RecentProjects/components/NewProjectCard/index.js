import React from "react";
import "./ProjectCard.css";
import ExternalButton from "../../../elements/ExternalButton";
import { CaretRightOutlined, InfoCircleOutlined } from "@ant-design/icons";

export default function ProjectCard({ project }) {
  const { title, thumbnail, demoLink, projectLink } = project;

  return (
    <div className="project-card">
      <img className="project-card__thumbnail" src={thumbnail} alt="" />
      <a
        className="project-card__project-info onHover--pointer"
        href={projectLink}
      >
        <InfoCircleOutlined /> Project
      </a>
      <div className="project-card__content-container">
        <h2 className="project-card__title">{title}</h2>
        <div className="project-card__buttons-container">
          <a
            className="project-card__demo-button onHover--pointer"
            href={demoLink}
          >
            <CaretRightOutlined />
          </a>
        </div>
      </div>
    </div>
  );
}
