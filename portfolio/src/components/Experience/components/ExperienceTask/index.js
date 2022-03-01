import React from "react";
import "./ExperienceTask.css";

export default function ExperienceTask({ img, title, left, description }) {
  const image = (
    <div className="experienceTask__imageContainer">
      <img className="experienceTask__image" src={img} alt="" />
    </div>
  );

  return (
    <>
      {left && image}
      <div className="experienceTask__descriptionContainer">
        <h3
          className={`experienceTask__title ${
            left || "experienceTask--textRight"
          }`}
        >
          {title}
        </h3>
        <p
          className={`experienceTask__description ${
            left || "experienceTask--textRight"
          }`}
        >
          {description}
        </p>
      </div>
      {left || image}
    </>
  );
}
