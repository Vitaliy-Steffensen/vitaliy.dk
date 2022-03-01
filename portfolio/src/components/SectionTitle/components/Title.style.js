import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Avenir";
  font-size: 7.5rem;
  color: transparent;
  -webkit-text-stroke: 5px #242424;
  margin-left: 15px;
  opacity: ${(props) =>
    props.localScrollFraction < 0.3
      ? `${props.localScrollFraction / 0.3}`
      : "1"};

  @media only screen and (max-width: 1024px) {
    -webkit-text-stroke: 3px #242424;
    font-size: 4rem;
    line-height: 4rem;
  }
`;

/*
import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Avenir";
  font-size: 7.5rem;
  color: transparent;
  -webkit-text-stroke: 5px #242424;
  margin-left: 15px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 2s;

  @media only screen and (max-width: 1024px) {
    -webkit-text-stroke: 3px #242424;
    font-size: 4rem;
    line-height: 4rem;
  }
`;

/*
${(props) =>
    props.localScrollFraction < 0.3
      ? `${props.localScrollFraction / 0.3}`
      : "1"};
      */
