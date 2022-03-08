import styled from "styled-components";

export const NavStyle = styled.div`
  position: fixed;
  z-index: 500;

  .hamburger {
    position: absolute;
    left: 30px;
    top: 30px;
    display: flex;
    height: 18px;
    width: 24px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    z-index: 1;

    &__icon {
      display: inline-block;
      height: 2px;
      width: 24px;
      background: #fff;
      border-radius: 2px;
    }
  }

  .sidebar {
    z-index: 10;
    height: 100vh;
    width: 230px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    transform: translatex(-100%);
    transition: transform 0.4s ease-in-out;

    &__close {
      position: absolute;
      top: 50%;
      right: -30px;
      background: #fff;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.03);
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translatex(-100%);
      cursor: pointer;
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
      font-size: 36px;
      margin-top: 80px;
      margin-bottom: 80px;
      color: #898989;

      a {
        color: currentcolor;
        text-decoration: none;
        transform: translatex(-80%);
        transition: transform 0.4s ease-in-out;

        &::before {
          content: "";
          height: 2px;
          background: #898989;
          width: 120px;
          position: absolute;
          bottom: -2px;
          left: 0;
          transform: translatex(-50%);
          opacity: 0;
          transition: transform 0.4s ease-in-out, opacity 0.4s linear;
        }

        &:hover {
          &::before {
            transform: translatex(0);
            opacity: 1;
          }
        }
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

    &__social {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        margin: 4px;
      }

      a,
      svg {
        display: inline-block;
        height: 18px;
        width: 18px;
      }
    }
  }

  .menu-control {
    display: none;

    &:checked {
      & + .sidebar {
        transform: translatex(0);
      }

      & + .sidebar .sidebar__close {
        transform: translatex(0) rotate(45deg);
      }

      & + .sidebar .sidebar__menu a {
        transform: translatex(0);
      }
    }
  }
`;
