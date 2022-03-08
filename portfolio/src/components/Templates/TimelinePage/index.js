import React from "react";
import SectionTitle from "../../SectionTitle";
import { Timeline } from "./components/Timeline.style";
import "./TimelinePage.css";

export default function TimelinePage({ title, link, ref, children }) {
  return (
    <div ref={ref} className="timeline-page">
      <Timeline />
      <div className="timeline-page__content">
        <SectionTitle id={link}>{title}</SectionTitle>
        {children}
      </div>
    </div>
  );
}
