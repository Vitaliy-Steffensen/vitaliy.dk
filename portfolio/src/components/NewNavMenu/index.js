import {
  GithubOutlined,
  LinkedinOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavStyle } from "./NavStyle.style";
import "./NewNavMenu.css";

export default function NewNavMenu() {
  return (
    <NavStyle>
      <label for="menu-control" className="hamburger">
        <MenuOutlined style={{ fontSize: 40, color: "#242424", zIndex: 10 }} />
      </label>
      <input type="checkbox" id="menu-control" className="menu-control" />

      <div className="sidebar">
        <nav className="sidebar__menu">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </nav>

        <label
          for="menu-control"
          className="sidebar__close onHover--pointer"
        ></label>

        <ul className="sidebar__social">
          <li>
            <a href="">
              <LinkedinOutlined />
            </a>
          </li>
          <li>
            <a href="">
              <GithubOutlined />
            </a>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
}
