import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Avenir";
  font-size: 6.5rem;
  color: transparent;
  -webkit-text-stroke: 5px #242424;
  margin-left: 15px;
  opacity: ${({ visible }) => (visible < 0.2 ? `0` : "1")};

  @media only screen and (max-width: 1024px) {
    -webkit-text-stroke: 2px #242424;
    font-size: 3rem;
    line-height: 4rem;
  }
`;
