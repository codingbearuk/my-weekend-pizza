import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  border: 1px solid ${colors.red};
  border-radius: 50px;
  overflow: hidden;
  max-width: 280px;
  height: 35px;
  transition: 0.2s;
  position: relative;
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${colors.red};
    `}
`;

export const Icon = styled.div<{ isActive: boolean }>`
  position: absolute;
  background: ${colors.red};
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s;
  left: 0;
  svg {
    color: ${colors.yellow};
    font-size: 1.2em;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      left: 80%;
      background: none;
    `}
`;

export const Input = styled.input`
  width: 80%;
  background: none;
  border: none;
  outline: none;
  text-align: center;
  caret-color: ${colors.yellow};
  color: ${colors.yellow};
  padding-left: 20%;
  :focus {
    font-weight: 600;
    padding-left: 0;
    padding-right: 20%;
  }
  ::placeholder {
    color: ${colors.yellow};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${colors.yellow} !important;
  }
`;
