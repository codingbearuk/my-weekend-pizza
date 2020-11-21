import styled, { css } from 'styled-components';

import colors from 'styled/colors';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;

  h1 {
    text-transform: uppercase;
  }

  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export const CloseContainer = styled.div<{}>`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  color: ${colors.yellow};
  transition-duration: 0.4s;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  ::before {
    content: '';
    transition-duration: 0.4s;
    width: 0;
    height: 100%;
    background: ${colors.yellow};
    border-radius: 0 5px 5px 0;
    position: absolute;
    z-index: -1;
    left: -5px;
  }
  :hover {
    color: ${colors.red};
    ::before {
      width: 175px;
    }
  }
`;
