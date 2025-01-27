import styled from "styled-components";

export const NavStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;

  .nav__hamburger {
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    height: 18px;
    width: 24px;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;
    z-index: 1;
  }

  .nav__sidebar {
    z-index: 500;
    height: 100vh;
    width: 300px;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    transform: translatex(100%);
    transition: transform 0.4s ease-in-out;
    box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.03);

    &-close {
      position: absolute;
      top: 50%;
      left: -30px;
      background: #fff;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.03);
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translatex(100%);
      transition: transform 0.4s ease-in-out 0.2s;

      &::before,
      &::after {
        content: "";
        height: 2px;
        background: #898989;
        width: 24px;
        display: block;
        position: absolute;
      }

      &::after {
        transform: rotate(90deg);
      }
    }

    &__menu {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-around;
      font-size: 2rem;
      font-family: "SF Display";
      font-weight: 300;
      margin: 60px auto 100px;
      color: #898989;
      width: 100%;
      max-height: 76vh;

      a {
        color: currentcolor;
        text-decoration: none;
        transform: translatex(80%);
        transition: transform 0.4s ease-in-out;

        ${() => {
          let css;
          for (let i = 1; i < 6; i++)
            css += ` &:nth-child(${i}) {
            transition-delay: ${i * 0.06}s;
          }`;
          return css;
        }}
      }
    }

    &-social {
      display: flex;
      list-style: none;
      justify-content: right;
      margin-right: 35px;
      margin-bottom: 10px;
      padding: 0;

      a {
        display: inline-block;
        color: currentcolor;
        text-decoration: none;
        margin-left: 25px;
        font-size: 25px;
        color: #898989;

        &:hover {
          color: #505050;
        }
      }
    }
  }

  .menu-control {
    display: none;

    &:checked {
      & + .nav__sidebar {
        transform: translatex(0);
      }

      & + .nav__sidebar .nav__sidebar-close {
        transform: translatex(0) rotate(45deg);
      }

      & + .nav__sidebar .nav__sidebar__menu a {
        transform: translatex(0);
      }
    }
  }
`;
