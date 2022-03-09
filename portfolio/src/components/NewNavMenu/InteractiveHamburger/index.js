import { MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { useScrollPosition } from "../../../Hooks/useScrollPosition";
import "./InteractiveHamburger.css";

export default function InteractiveHamburger() {
  const [inZone, setInZone] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef();
  const scrollPosition = useScrollPosition();

  const onMouseMove = (e) => {
    !inZone && setInZone(true);
    setCirclePosition({
      x: e.pageX - containerRef.current.getBoundingClientRect().x,
      y:
        e.pageY -
        containerRef.current.getBoundingClientRect().y -
        scrollPosition,
    });
  };

  const styleObj = inZone
    ? {
        transform: `translate(
    ${circlePosition.x - 40}px, ${circlePosition.y - 25}px
  )`,
      }
    : { transform: "translate(50%, 50%)" };

  return (
    <div
      className="interactive-hamburger"
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setInZone(false)}
    >
      <div
        className="interactive-hamburger__wrapper"
        onMouseLeave={() => setInZone(false)}
      >
        <div
          className={`interactive-hamburger__icon-container onHover--pointer `}
          style={styleObj}
          onMouseMove={onMouseMove}
        >
          <MenuOutlined className="interactive-hamburger__icon" />
        </div>
      </div>
    </div>
  );
}
