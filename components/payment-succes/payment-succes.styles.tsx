import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  background: ${colors.ultraTransparetnWhite};
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
`;

export const ContentWindow = styled.div<{ success: boolean }>`
  background: ${colors.white};
  border-radius: 5px;
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    color: ${p => (p.success ? colors.success : colors.red)};
    font-size: 6em;
  }
  h1,
  h2,
  p {
    color: ${colors.black};
  }
  h1 {
    font-size: 2.2em;
  }
  h2 {
    font-family: 'helvetica';
    font-size: 1.3em;
  }
  p {
    font-size: 1em;
  }
`;

export const Button = styled.button<{ success: boolean }>`
  border-radius: 5px;
  padding: 5px 10px;
  position: absolute;
  bottom: 25px;
  ${({ success }) =>
    success
      ? css`
          border: 1px solid ${colors.success};
          color: ${colors.success};
        `
      : css`
          border: 1px solid ${colors.red};
          color: ${colors.red};
        `}
`;
