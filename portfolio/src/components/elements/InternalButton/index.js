import React, { useState } from "react";
import { InternalButtonContainer } from "./components/InternalButtonContainer.style";

export default function InternalButton({ children, onClick }) {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) =>
    setCirclePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });

  return (
    <InternalButtonContainer
      className="internal-button onHover--pointer"
      onMouseMove={onMouseMove}
      circlePosition={circlePosition}
      onClick={onClick}
    >
      <span>{children}</span>
    </InternalButtonContainer>
  );
}
