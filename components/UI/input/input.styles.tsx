import styled from 'styled-components';

import colors from 'styled/colors';

export const Container = styled.div<{}>`
  display: grid;
  grid-template-columns: 25% 75%;
  width: 100%;
  height: 30px;
`;

export const IconContainer = styled.div<{}>`
  background: ${colors.white};
  border-radius: 50px 0 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${colors.black};
  }
`;

export const InputElement = styled.input<{}>`
  border-radius: 0 50px 50px 0;
  border: 1px solid ${colors.white};
  background: none;
  outline: none;
  text-align: center;
  color: ${colors.white};
  ::placeholder {
    color: ${colors.white};
  }
`;
