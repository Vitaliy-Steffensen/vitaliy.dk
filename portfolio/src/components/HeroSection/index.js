import React from "react";
import T from "../../utils/translations/TranslatedText/index.js";
import Header from "../Header";
import { HeroBagground } from "./Components/HeroBagground.style";
import { HeroContentContainer } from "./Components/HeroContentContainer.style";
import { HeroTitle } from "./Components/HeroTitle.style";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <HeroBagground id="intro">
      <Header />
      <div className="heroSection__container">
        <HeroTitle>
          <T>I am</T>
        </HeroTitle>
        <HeroContentContainer>
          <h1 className="heroSection__contentTitle">Vitaliy Steffensen</h1>
          <h3 className="heroSection__contentSubtitle">
            <T>Front-end developer</T>
          </h3>
          <span className="heroSection__contentParagraph">
            <T>with design & back-end experience</T>
          </span>
        </HeroContentContainer>
      </div>
    </HeroBagground>
  );
}
