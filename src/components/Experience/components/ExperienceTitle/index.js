import React from "react";
import T from "../../../../utils/translations/TranslatedText/index.js";
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
          <h3 className="experienceTitle__title">
            <T>{title}</T>
          </h3>
          <span className="experienceTitle__subTitble">
            <T>{fromDate}</T>
          </span>
          <span className="experienceTitle__subTitble experienceTitle--wideSubtitle">
            -
          </span>
          <span className="experienceTitle__subTitble">
            <T>{toDate}</T>
          </span>
        </div>
      </div>
    </>
  );
}
