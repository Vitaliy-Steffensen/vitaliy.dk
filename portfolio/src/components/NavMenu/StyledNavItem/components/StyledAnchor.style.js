import styled from "styled-components";

export const StyledAnchor = styled.a`
  position: relative;
  display: inline-flex;
  padding: 15px 35px;
  background: #fff;
  color: #000;
  overflow: hidden;
  border: none;
  display: block;
  text-align: right;
  font-family: "SF Display";
  font-size: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: ${({ circlePosition }) => circlePosition.x + "px"};
    top: ${({ circlePosition }) => circlePosition.y + "px"};
    transform: translate(-50%, -50%);

    width: 0px;
    height: 0px;
    background: #de4721;
    border-radius: 50%;
    transition: width 0.5s, height 0.5s;
  }

  &:hover::before {
    width: 500px;
    height: 500px;
  }

  * {
    position: relative;
    z-index: 1;
    margin: auto;
    color: #898989;
    transition: color 0.5s ease;
  }

  &:hover * {
    color: #fff;
  }
`;
