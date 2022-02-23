import React from "react";
import { HeroBagground } from "./Components/HeroBagground.style";
import { HeroContentContainer } from "./Components/HeroContentContainer.style";
import { HeroTitle } from "./Components/HeroTitle.style";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <HeroBagground id="introduction">
      <div className="heroSection__container">
        <HeroTitle>I am</HeroTitle>
        <HeroContentContainer>
          <h1 className="heroSection__contentTitle">Vitaliy Steffensen</h1>
          <h3 className="heroSection__contentSubtitle">Front-end developer</h3>
          <span className="heroSection__contentParagraph">
            with design & backend experience
          </span>
        </HeroContentContainer>
      </div>
    </HeroBagground>
  );
}
