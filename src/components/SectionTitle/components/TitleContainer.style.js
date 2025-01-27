import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  margin-left: ${({ visible }) => (visible < 0.2 ? "-800px" : "0px")};
  transition: margin-left 250ms 0ms ease-out;
  margin-bottom: 150px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
