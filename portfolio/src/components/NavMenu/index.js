import React, { useState } from "react";
import "./NavMenu.css";
import { NavItems } from "./NavItems";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navMenu">
      <button onClick={() => setOpen((prevState) => !prevState)}>Nav</button>
      {open &&
        NavItems?.map((item) => (
          <a href={item.link}>
            {item.icon ? (
              <img src={item?.icon} alt="" />
            ) : (
              <span>{item.name}</span>
            )}
          </a>
        ))}
    </div>
  );
}
