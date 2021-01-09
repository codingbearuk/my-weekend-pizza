import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{ width: number; device: string }>`
  display: flex;
  flex-direction: column;
  width: ${p => (p.device === 'mobile' ? '100vw' : p.width + 'px')};

  button {
    width: 100%;
    :not(:last-child) {
      border-bottom: 1px dashed ${colors.white};
    }
  }
`;
