import styled from "styled-components";
import heroBG from "../../../assets/Images/heroBagground.jpg";
import { useScrollPosition } from "../../../Hooks/useScrollPosition";

export const HeroBagground = styled.div`
  height: 110vh;

  @media (min-width: 768px) {
    background-image: linear-gradient(
        rgba(240, 240, 240, ${() => useScrollPosition() / window.innerHeight})
          75%,
        rgba(255, 255, 255, 1)
      ),
      url(${heroBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  @media (max-width: 767px) {
    background-image: linear-gradient(#e5e3e6 75%, rgba(255, 255, 255, 1));
  }
`;
