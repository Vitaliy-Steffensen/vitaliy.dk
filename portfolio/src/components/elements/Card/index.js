import React from "react";
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
          {title}
        </p>
      )}
      {children}
    </div>
  );
}
