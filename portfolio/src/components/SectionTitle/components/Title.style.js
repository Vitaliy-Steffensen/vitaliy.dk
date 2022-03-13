import styled from "styled-components";

export const Title = styled.h2`
  font-family: Helvetica;
  font-size: 6.5rem;
  line-height: 1.8;
  color: transparent;
  -webkit-text-stroke: 4px #242424;
  margin-left: 15px;
  opacity: ${({ visible }) => (visible < 0.2 ? `0` : "1")};

  @media only screen and (max-width: 1024px) {
    -webkit-text-stroke: 2px #242424;
    font-size: 3rem;
    line-height: 4rem;
  }
`;
