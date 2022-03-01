import React from "react";
import SectionTitle from "../../SectionTitle";
import { Timeline } from "./components/Timeline.style";

export default function TimelinePage({
  title,
  link,
  ref,
  contentMargin,
  children,
}) {
  return (
    <div ref={ref} style={{ display: "flex" }}>
      <Timeline />
      <div
        style={{
          margin: `${contentMargin ? contentMargin : 0}px 0px`,
          flex: 1,
        }}
      >
        <SectionTitle id={link}>{title}</SectionTitle>
        {children}
      </div>
    </div>
  );
}
