import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{}>`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: ${colors.transparetnWhite};
  backdrop-filter: blur(5px);
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  /* opacity: 0; */
`;

export const Window = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  color: ${colors.black};
  display: grid;
  grid-template-rows: 5% 90% 5%;
  height: 80%;
  width: 80%;
  /* opacity: 0; */
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
`;
