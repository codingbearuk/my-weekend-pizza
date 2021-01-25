import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.button<{ color?: string }>`
  border: 1px solid ${p => p.color || colors.white};
  border-radius: 5px;
  padding: 3px 20px;
  background: none;
  color: ${p => p.color || colors.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  svg{
    color: ${p => p.color || colors.white};
  }

  :focus {
    background: ${p => p.color || colors.white};
    color: ${p => p.color || colors.black};
    svg{
    color: ${colors.black};
  }
  }
`;
