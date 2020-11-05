import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.section`
  padding: 30px 5%;
`;

export const PizzasContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 0 5%;
  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;
