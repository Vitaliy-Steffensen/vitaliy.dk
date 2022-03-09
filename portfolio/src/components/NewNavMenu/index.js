import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";
import InteractiveHamburger from "./InteractiveHamburger";
import { NavStyle } from "./NavStyle.style";

export default function NewNavMenu() {
  return (
    <NavStyle>
      <label htmlFor="menu-control" className="nav__hamburger">
        <InteractiveHamburger />
      </label>
      <input type="checkbox" id="menu-control" className="menu-control" />

      <div className="nav__sidebar">
        <nav className="nav__sidebar__menu">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </nav>

        <label
          htmlFor="menu-control"
          className="nav__sidebar-close onHover--pointer"
        ></label>

        <div className="nav__sidebar-social">
          <a href="">
            <LinkedinOutlined />
          </a>
          <a href="">
            <GithubOutlined />
          </a>
        </div>
      </div>
    </NavStyle>
  );
}
