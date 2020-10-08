import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{}>`
  position: fixed;
  top: 80px;
  border-radius: 10px;
  background: ${colors.transparetnWhite};
  backdrop-filter: blur(10px);
  z-index: 1000;
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  h1 {
    margin: 20px 0;
    font-size: 1.3em;
  }
`;
export const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  min-height: 300px;
  max-height: 70vh;
  padding-top: 10px;
  padding-left: 15px;
  width: 100%;
  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${colors.ultraTransparetnWhite};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${colors.red};
  }
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 5%;
`;

export const PayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 1.3em;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
`;
