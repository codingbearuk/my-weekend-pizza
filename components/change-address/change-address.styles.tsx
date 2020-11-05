import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${colors.ultraTransparetnWhite};
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  opacity: 0;
`;

export const Modal = styled.div`
  background: ${colors.white};
  border-radius: 5px;
  width: 80%;
  height: 0;
  position: relative;
  overflow: hidden;
  nav {
    position: absolute;
    top: 0;
    right: 10px;
    svg {
      color: ${colors.black};
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;
