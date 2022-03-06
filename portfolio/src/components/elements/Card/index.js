import React from "react";
import "./Card.css";

export default function Card({ children, title }) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      {children}
    </div>
  );
}
