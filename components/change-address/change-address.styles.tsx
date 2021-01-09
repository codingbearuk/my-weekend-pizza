import styled, { css } from 'styled-components';
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
      color: ${colors.red};
      cursor: pointer;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    h1 {
      color: ${colors.black};
    }
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const InputContainer = styled.div<{ device: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin-bottom: 10px;
  width: 80%;
  div {
    background: ${colors.red};
    border: 1px solid transparent;
    border-radius: 5px 0 0 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    flex: 1;
    color: ${colors.white};
    svg {
      color: ${colors.white};
      ${p =>
        p.device === 'desktop' &&
        css`
          margin-right: 5px;
        `}
    }
  }
  input {
    border: 1px solid ${colors.red};
    border-radius: 0 5px 5px 0;
    outline: none;
    background: none;
    height: 100%;
    text-align: center;
    flex: 3;
  }
`;

export const UpdateButton = styled.button<{ isLoading: boolean; isUpdated: boolean }>`
  position: absolute;
  bottom: 20px;
  width: 90%;
  margin: 0 5%;
  border-radius: 5px;
  background: ${({ isLoading, isUpdated }) =>
    isLoading ? colors.inactive : isUpdated ? colors.success : colors.red};
  color: ${colors.white};
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  outline: none;
`;
