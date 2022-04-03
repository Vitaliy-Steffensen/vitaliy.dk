import React, { useState } from "react";
import {
  InternalButtonContainer,
  StyledAnchor,
} from "./components/StyledAnchor.style";

export default function StyledNavItem({ href, children }) {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) =>
    setCirclePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });

  return (
    <StyledAnchor
      href={href}
      className="internal-button onHover--pointer"
      onMouseMove={onMouseMove}
      circlePosition={circlePosition}
    >
      <span>{children}</span>
    </StyledAnchor>
  );
}
