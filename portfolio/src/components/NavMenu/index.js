import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";
import InternalButton from "../elements/InternalButton";
import InteractiveHamburger from "./InteractiveHamburger";
import { NavItems, socialItems } from "./navItems";
import { NavStyle } from "./NavStyle.style";
import StyledNavItem from "./StyledNavItem.style.css";

export default function NavMenu() {
  return (
    <NavStyle>
      <label htmlFor="menu-control" className="nav__hamburger">
        <InteractiveHamburger />
      </label>
      <input type="checkbox" id="menu-control" className="menu-control" />

      <div className="nav__sidebar">
        <nav className="nav__sidebar__menu">
          {NavItems?.map((item, i) => (
            <StyledNavItem href={item?.link} key={i}>
              {item?.name}
            </StyledNavItem>
          ))}
        </nav>

        <label
          htmlFor="menu-control"
          className="nav__sidebar-close onHover--pointer"
        ></label>

        <div className="nav__sidebar-social">
          {socialItems?.map((item, i) => (
            <a className="onHover--pointer" href={item?.link} key={i}>
              {item?.icon}
            </a>
          ))}
        </div>
      </div>
    </NavStyle>
  );
}
