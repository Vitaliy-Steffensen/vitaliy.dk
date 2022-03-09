import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../../../Hooks/useWindowSize";
import "./ExperienceTask.css";

export default function ExperienceTask({
  img,
  video,
  title,
  left,
  description,
}) {
  const [previewVideo, setPreviewVideo] = useState(false);
  const { width } = useWindowSize();

  const image = (
    <div className="experience-task__Wrapper">
      <div
        className="experienceTask__imageContainer"
        onMouseEnter={() => video && setPreviewVideo(true)}
        onMouseLeave={() => video && setPreviewVideo(false)}
      >
        {previewVideo ? (
          <video loop autoPlay muted className="experienceTask__video">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img className="experienceTask__image" src={img} alt="" />
        )}
      </div>
    </div>
  );

  return (
    <>
      {width < 1024 ? image : left && image}
      <div className="experience-task__Wrapper">
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
      </div>
      {width > 1024 && (left || image)}
    </>
  );
}
