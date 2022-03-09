import styled from "styled-components";

export const InternalButtonContainer = styled.button`
  position: relative;
  display: inline-flex;
  padding: 15px 35px;
  background: #242424;
  color: #fff;
  overflow: hidden;
  border: none;
  border-radius: 5px;

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
    width: 300px;
    height: 300px;
  }

  * {
    position: relative;
    z-index: 1;
    margin: auto;
  }

  @media (max-width: 767px) {
    padding: 10px 30px;
    font-size: 1.25rem;
    margin: auto;
  }
`;
