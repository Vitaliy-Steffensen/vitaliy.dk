import React from "react";
import T from "../../../utils/translations/TranslatedText/index.js";
import SectionTitle from "../../SectionTitle";
import { Timeline } from "./components/Timeline.style";
import "./TimelinePage.css";

export default function TimelinePage({
  title,
  link,
  ref,
  children,
  allowOverflow,
}) {
  return (
    <div ref={ref} className="timeline-page">
      <Timeline />
      <div
        className="timeline-page__content"
        style={{ overflowY: allowOverflow ? "visible" : "hidden" }}
      >
        <SectionTitle id={link}>
          <T>{title}</T>
        </SectionTitle>
        {children}
      </div>
    </div>
  );
}
