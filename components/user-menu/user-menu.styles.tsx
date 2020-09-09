import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  width: ${p => p.width}px;

  button {
    :not(:last-child) {
      border-bottom: 1px dashed ${colors.white};
    }
  }
`;
