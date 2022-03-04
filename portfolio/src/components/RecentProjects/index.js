import React from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./RecentProject.css";
import arrowRightIcon from "../../assets/Images/Icons/arrow-right.png";
import AmazonRedesignImage from "../../assets/Images/projects/AmazonRedesign.jpg";
import { useHistory } from "react-router-dom";
import "./offset-card-grid.css";

import bookEmpowered from "../../assets/Images/projects/teasers/book-empowered.png";
import booksInspired from "../../assets/Images/projects/teasers/books-inspired.png";
import philips from "../../assets/Images/projects/teasers/personalCare-philips.jpg";
import kitchenSiemens from "../../assets/Images/projects/teasers/kitchen-Siemens.jpeg";
import vinyls from "../../assets/Images/projects/teasers/vinyls.jpg";

export default function RecentProjects() {
  const history = useHistory();

  return (
    <TimelinePage
      title="Most recent projects"
      link="recent-project"
      contentMargin={200}
    >
      <>
        <div className="fancy-cards-grid">
          <div className="fancy-card">
            <span className="fancy-card__number" aria-hidden="true">
              / 1
            </span>
            <h2 className="fancy-card__title">Amazon Redesign</h2>
            <span className="fancy-card__arrow" aria-hidden="true">
              &#8594;
            </span>
            <img src={bookEmpowered} alt="" className="fancy-card__image" />
            <img src={booksInspired} alt="" className="fancy-card__image" />
            <img src={philips} alt="" className="fancy-card__image" />
            <img src={kitchenSiemens} alt="" className="fancy-card__image" />
            <img src={vinyls} alt="" className="fancy-card__image" />
          </div>
          <div className="fancy-card">
            <span className="fancy-card__number" aria-hidden="true">
              / 2
            </span>
            <h2 className="fancy-card__title">Typing Site(wip)</h2>
            <span className="fancy-card__arrow" aria-hidden="true">
              &#8594;
            </span>
            <img src={bookEmpowered} alt="" className="fancy-card__image" />
            <img src={booksInspired} alt="" className="fancy-card__image" />
            <img src={philips} alt="" className="fancy-card__image" />
            <img src={kitchenSiemens} alt="" className="fancy-card__image" />
            <img src={vinyls} alt="" className="fancy-card__image" />
          </div>
        </div>

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
      </>
    </TimelinePage>
  );
}
