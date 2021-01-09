import styled from 'styled-components';
import colors from 'styled/colors';

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  padding: 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${colors.white};
  }
  :active {
    background: ${colors.white};
    color: ${colors.black};
    svg {
      color: ${colors.black};
    }
  }
`;
