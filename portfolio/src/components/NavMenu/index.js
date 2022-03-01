import React, { useState } from "react";
import "./NavMenu.css";
import { NavItems } from "./NavItems";
import arrowRight from "../../assets/Images/Icons/arrowRight.png";
import arrowLeft from "../../assets/Images/Icons/arrowLeft.png";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => open || setOpen((prevState) => !prevState)}
      className={`navMenu ${open || "navMenu--closeMenu onHover--pointer"}`}
    >
      <img
        className="navMenu__toggle onHover--pointer"
        onClick={() => open && setOpen((prevState) => !prevState)}
        src={open ? arrowRight : arrowLeft}
        alt=""
      />
      <div className={`navMenu__content ${open || "navMenu--closeContent"}`}>
        {NavItems?.map((item) => (
          <a className="navMenu__option" href={item.link}>
            {item?.icon ? (
              <img
                className="navMenu__optionImage onHover--pointer"
                src={item?.icon}
                alt=""
              />
            ) : (
              <span className="navMenu__optionText onHover--pointer">
                {item.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
