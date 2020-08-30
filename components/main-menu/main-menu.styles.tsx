import styled, { css } from "styled-components";

import colors from "styled/colors";

export const Container = styled.div<{}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background: ${colors.transparetnWhite};
  z-index: 100;
  opacity: 0;
`;

export const MenuBox = styled.nav<{}>`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.black};
  color: ${colors.white};
  width: 30vw;
  height: 100vh;
  z-index: 101;
`;
