import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  margin-left: ${(props) =>
    props.localScrollFraction < 0.3
      ? `-${300 * (1 - props.localScrollFraction / 0.3)}px`
      : "0px"};
  z-index: 1;

  transition: margin-left ease-out;
`;

/*
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  z-index: 1;

  margin-left: ${({ visible }) => (visible ? "0px" : "-100vw")};
  transition: margin-left 0.5s ease-in-out;
`;

/* ${(props) =>
    props.localScrollFraction < 0.3
      ? `-${300 * (1 - props.localScrollFraction / 0.3)}px`
      : "0px"};
      */
