import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid transparent;
  p {
    font-size: 0.8em;
    margin: 0;
  }
  :hover {
    border: 1px solid ${colors.white};
  }
`;
