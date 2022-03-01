import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./RecentProject.css";
import arrowRightIcon from "../../assets/Images/Icons/arrow-right.png";
import AmazonRedesignImage from "../../assets/Images/projects/AmazonRedesign.jpg";
import { useHistory } from "react-router-dom";

export default function RecentProject() {
  const history = useHistory();

  return (
    <TimelinePage
      title="Most recent project"
      link="recent-project"
      contentMargin={200}
    >
      <div className="recentProject">
        <img
          className="recentProject__image"
          src={AmazonRedesignImage}
          alt=""
        />
        <div className="recentProject__descriptionContainer">
          <h4 className="recentProject__title">Amazon redesign</h4>
          <p className="recentProject__description">
            A fullstack project where I completely redesigned and rebuild
            Amazon. This is created using React js and Django. It includes a
            functioning order and payment processing system, stock management
            and more...
          </p>
          <div className="recentProject__btnsContainer">
            <button
              className="recentProject__button onHover--pointer recentProject--demoBtn"
              onClick={() => history.push("")}
            >
              Demo
              <img
                className="recentProject__buttonIcon onHover--pointer"
                src={arrowRightIcon}
                alt=""
              />
            </button>
            <button
              className="recentProject__button onHover--pointer recentProject--projectBtn"
              onClick={() => history.push("")}
            >
              Project Details
            </button>
          </div>
        </div>
      </div>
    </TimelinePage>
  );
}
