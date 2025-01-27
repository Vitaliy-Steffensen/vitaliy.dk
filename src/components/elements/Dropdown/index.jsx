import { CaretDownOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import InternalButton from "../InternalButton";
import "./Dropdown.css";
import T from "../../../utils/translations/TranslatedText/index.js";

const Dropdown = ({ placeholder, selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <div className="dropdown">
      <div
        ref={menuRef}
        className="dropdown__btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="onHover--pointer">
          {selected !== "" ? selected.slice(0, 3) : placeholder}
          &nbsp;
          <CaretDownOutlined
            className={`dropdown__arrow ${
              isActive && "dropdown__arrow--flipped"
            }`}
          />
        </div>
        {isActive && (
          <div className="dropdown__content">
            {options.map((option, key) => (
              <InternalButton
                key={key}
                style={{
                  color: "#242424",
                  background: "transparent",
                  padding: "15px 30px",
                  margin: "10px 0px",
                  borderRadius: 0,
                }}
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                <T>{option}</T>
              </InternalButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
