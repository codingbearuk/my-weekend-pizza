import styled, { css } from "styled-components";

import { StyledContainer } from "./@navbar.t";
import colors from "styled/colors";

export const Container = styled.nav<{ isScrolled: boolean }>`
  ${(p) =>
    p.isScrolled &&
    css`
      backdrop-filter: blur(5px);
      background: ${colors.transparetnWhite};
      flex-direction: row-reverse;
    `};
  position: fixed;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 5%;
  z-index: 99;
  svg {
    color: ${colors.white};
    cursor: pointer;
  }
`;
