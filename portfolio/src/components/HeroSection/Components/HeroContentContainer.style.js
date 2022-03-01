import styled from "styled-components";
import { useScrollPosition } from "../../../Hooks/useScrollPosition";

export const HeroContentContainer = styled.h2`
  background: linear-gradient(
    0.45turn,
    #e5e3e600,
    #e5e3e6,
    #e5e3e600,
    #e5e3e600
  );
  font-family: "SF Display";
  color: #4b4b4b;
  text-align: center;
  z-index: 10;
  position: absolute;

  @media (min-width: 768px) {
    top: ${() => {
      const scrollPosition = useScrollPosition();
      return scrollPosition > 0 && scrollPosition < window.innerHeight
        ? `${40 * (1 - scrollPosition / window.innerHeight)}vh`
        : "40vh";
    }};
  }

  @media (max-width: 767px) {
    width: 100vw;
    top: ${() => {
      const scrollPosition = useScrollPosition();
      return scrollPosition > 0 && scrollPosition < window.innerHeight
        ? `${45 * (1 - scrollPosition / window.innerHeight)}vh`
        : "45vh";
    }};
  }
`;
