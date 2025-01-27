import React, { useRef } from "react";
import "./AboutMe.css";
import TimelinePage from "../Templates/TimelinePage";
import { useLocalScrollFraction } from "../../Hooks/useLocalScrollFraction";
import TypeWriter from "../elements/TypeWriter";
import tranlate from "../../utils/translations/translate";
import { useSelector } from "react-redux";

export default function AboutMe() {
  const textRef = useRef();
  const localScrollFraction = useLocalScrollFraction(textRef);
  const language = useSelector((state) => state.language);

  const texts = [
    tranlate(language, "With expertise"),
    tranlate(
      language,
      `
      With proven expertise in managing complex, cross-functional
projects and streamlining processes, I have consistently
delivered measurable results. In the most recents months I
both drove initiatives that increased revenue by millions, and
implemented process improvements saving other companies
up to 50 hours per month. I am deeply passionate about
fostering collaboration and empowering others to make an
impact, and working towards sustainable success.
      `
    ),
  ];

  return (
    <TimelinePage title="About me" link="about">
      <div className="AboutMe__container" ref={textRef}>
        {localScrollFraction > 0.05 && (
          <div className="AboutMe__paragraph">
            <span style={{ color: "#DE4721" }}>{"// "}</span>
            <TypeWriter texts={texts} />
          </div>
        )}
      </div>
    </TimelinePage>
  );
}
