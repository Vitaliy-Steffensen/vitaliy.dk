import React from "react";
import T from "../../../utils/translations/TranslatedText/index.js";
import "./Card.css";

export default function Card({ children, title, titleUnderline }) {
  return (
    <div className="card">
      {title && (
        <p
          className={`card__title ${
            titleUnderline && "card__title--underline"
          }`}
        >
          <T>{title}</T>
        </p>
      )}
      {children}
    </div>
  );
}
