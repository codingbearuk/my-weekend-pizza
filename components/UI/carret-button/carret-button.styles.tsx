import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{}>`
  position: relative;
  svg {
    color: ${colors.yellow};
    font-size: 1.7em;
    cursor: pointer;
  }
`;

export const PlusOne = styled.div`
  position: absolute;
  bottom: -10px;
  right: -30px;
  font-weight: 600;
  font-size: 1.3rem;
  opacity: 0;
`;
