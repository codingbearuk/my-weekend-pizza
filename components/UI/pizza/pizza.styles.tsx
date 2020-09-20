import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div<{}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  h2 {
    font-size: 1.5em;
    margin: 10px 0;
    color: ${colors.yellow};
  }
  img {
    width: 70%;
  }
`;

export const IngredientsContainer = styled.div<{}>`
  text-align: center;
  font-weight: 100;
  font-size: 0.7em;
`;

export const Price = styled.div`
  color: ${colors.red};
  font-family: 'bradley hand';
  font-size: 1.5em;
`;
