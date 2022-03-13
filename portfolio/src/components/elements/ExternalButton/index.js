import { SwapRightOutlined } from "@ant-design/icons";
import React from "react";
import "./ExternalButton.css";
import { ExternalButtonContainer } from "./components/ExternalButtonContainer.style";
import T from "../../../utils/translations/TranslatedText/index.js";

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
      rel="noreferrer"
      target="_blank"
      className="circle-button onHover--pointer"
      backgroundColor={backgroundColor}
      color={color}
    >
      <span className="circle-button__title">
        <T>{title}</T>
      </span>
      <div className="circle-button__icon">
        {icon ? icon : <SwapRightOutlined />}
      </div>
    </ExternalButtonContainer>
  );
}
