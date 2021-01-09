import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? colors.red : colors.yellow)};
  cursor: pointer;

  :not(:last-child) {
    margin-right: 5px;
  }
`;
