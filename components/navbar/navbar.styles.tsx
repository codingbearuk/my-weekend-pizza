import styled, { css } from "styled-components";

import { StyledContainer } from "./@navbar.t";
import colors from "styled/colors";

export const Container = styled.nav<{ isScrolled: boolean }>`
  background: ${({ isScrolled }) =>
    isScrolled ? colors.transparetnWhite : "none"};
  ${(p) =>
    p.isScrolled &&
    css`
      backdrop-filter: blur(5px);
    `};
  position: fixed;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 5%;

  svg {
    color: ${colors.white};
    cursor: pointer;
  }
`;
