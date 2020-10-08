import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const CItem = styled.div<{ isHover: boolean }>`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
  border-radius: 10px;
  padding: 10px 5px;
  margin-bottom: 15px;
  position: relative;
  transition-duration: 0.3s;
  ${p =>
    p.isHover &&
    css`
      filter: blur(3px);
      opacity: 0.6;
    `}

  img {
    width: 80%;
  }
  h2 {
    color: ${colors.yellow};
    font-size: 1em;
    margin: 0;
  }
  p {
    font-family: 'bradley hand';
    color: ${colors.red};
    font-size: 1.2em;
    margin: 0;
  }
`;

export const Circe = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  color: ${colors.background};
  background: ${colors.white};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const DeleteIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    font-size: 4em;
    cursor: pointer;
    color: ${colors.white};
  }
`;
