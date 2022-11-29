import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";
import T from "../../utils/translations/TranslatedText/index.js";
import InternalButton from "../elements/InternalButton";
import InteractiveHamburger from "./InteractiveHamburger";
import { NavStyle } from "./NavStyle.style";
import StyledNavItem from "./StyledNavItem";
import {NavItems, socialItems} from "./NavItems";

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
              <T>{item?.name}</T>
            </StyledNavItem>
          ))}
        </nav>

        <label
          htmlFor="menu-control"
          className="nav__sidebar-close onHover--pointer"
        ></label>

        <div className="nav__sidebar-social">
          {socialItems?.map((item, i) => (
            <a
              className="onHover--pointer"
              href={item?.link}
              rel="noreferrer"
              target="_blank"
              key={i}
            >
              {item?.icon}
            </a>
          ))}
        </div>
      </div>
    </NavStyle>
  );
}
