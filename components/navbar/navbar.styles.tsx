import styled, { css } from 'styled-components';

import { StyledContainer } from './@navbar.t';
import colors from 'styled/colors';

export const Container = styled.nav<{ isScrolled: boolean }>`
  ${p =>
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

export const PizzaLogoContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 90%;
  }
  p {
    margin: 0;
    font-family: 'bradley hand';
    font-size: 1.4em;
  }
`;
