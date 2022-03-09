import styled from "styled-components";

export const Timeline = styled.div`
  z-index: 10;
  height: auto;
  background-color: white;
  border-right: solid #eeeeee 3px;
  width: 50px;

  @media only screen and (max-width: 1024px) {
    min-width: 20px;
    max-width: 20px;
  }
`;
