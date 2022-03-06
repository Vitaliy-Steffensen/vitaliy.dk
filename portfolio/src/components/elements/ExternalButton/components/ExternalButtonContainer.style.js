import styled from "styled-components";

export const ExternalButtonContainer = styled.div`
  width: min-content;
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 1;
  position: relative;
  margin: 10px auto 0px;
  padding: 12px 22px;
  font-size: 1rem;
  transition: all 0.2s ease;
  color: ${({ color }) => color};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;

    background: ${({ backgroundColor }) => backgroundColor};
    opacity: 0.5;
  }
`;
