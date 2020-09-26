import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{ isHover: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  ${p =>
    p.isHover
      ? css`
          border: 2px solid ${colors.yellow};
        `
      : css`
          border: 2px solid transparent;
        `}
  h2 {
    font-size: 1.5em;
    margin: 10px 0;
    color: ${colors.yellow};
  }
  img {
    width: 70%;
  }
`;

export const Description = styled.div<{}>`
  text-align: center;
  font-weight: 100;
  font-size: 0.7em;
`;

export const Price = styled.strong`
  color: ${colors.red};
  font-family: 'bradley hand';
  font-size: 1.5em;
`;

export const DisplayOnHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  height: 80px;
`;
