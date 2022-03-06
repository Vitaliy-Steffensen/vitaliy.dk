import { SwapRightOutlined } from "@ant-design/icons";
import React from "react";
import "./ExternalButton.css";
import { ExternalButtonContainer } from "./components/ExternalButtonContainer.style";

export default function ExternalButton({
  title,
  link,
  backgroundColor,
  color,
  icon,
}) {
  return (
    <ExternalButtonContainer
      href={link}
      className="circle-button onHover--pointer"
      backgroundColor={backgroundColor}
      color={color}
    >
      <span className="circle-button__title">{title}</span>
      <div className="circle-button__icon">
        {icon ? icon : <SwapRightOutlined />}
      </div>
    </ExternalButtonContainer>
  );
}
