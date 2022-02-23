import React, { useEffect, useRef } from "react";
import "./AboutMe.css";
import { Timeline } from "./components/Timeline.style";

export default function AboutMe() {
  const componentRef = useRef();

  return (
    <div className="AboutMe" ref={componentRef}>
      <Timeline />
      <div className="AboutMe__content">fddsss</div>
    </div>
  );
}
