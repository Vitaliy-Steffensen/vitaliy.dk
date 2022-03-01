import React from "react";
import "./ExperienceTitle.css";

export default function ExperienceTitle({ img, title, fromDate, toDate }) {
  return (
    <>
      <div className="experienceTitle__containerLeft">
        <div className="experienceTitle__timelineMark" />
        <img className="experienceTitle__image" src={img} alt="" />
      </div>
      <div className="experienceTitle__containerRight">
        <div className="experienceTitle__titleContainer">
          <h3 className="experienceTitle__title">{title}</h3>
          <span className="experienceTitle__subTitble">{fromDate}</span>
          <span className="experienceTitle__subTitble experienceTitle--wideSubtitle">
            -
          </span>
          <span className="experienceTitle__subTitble">{toDate}</span>
        </div>
      </div>
    </>
  );
}
