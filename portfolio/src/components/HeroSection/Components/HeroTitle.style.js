import styled from "styled-components";
import { useScrollPosition } from "../../../Hooks/useScrollPosition";

export const HeroTitle = styled.h2`
  font-family: "Avenir";
  color: transparent;
  -webkit-text-stroke: 2px #bab8bd;
  font-size: 9rem;
  z-index: 5;
  position: absolute;
  top: calc(43vh - 9rem);
  left: ${() => {
    const scrollPosition = useScrollPosition();
    return scrollPosition > 0 && scrollPosition < window.innerHeight
      ? `${5.5 * (1 - scrollPosition / window.innerWidth)}vw`
      : "5.5vw";
  }};
`;
