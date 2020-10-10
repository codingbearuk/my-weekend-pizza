import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  padding: 0 5%;
  position: relative;
  height: 100%;
`;

export const Title = styled.h1``;

export const CartItem = styled.div`
  margin-bottom: 15px;
  h3 {
    font-size: 1.3em;
  }
  p {
    margin: 0;
    font-size: 1em;
  }
`;

export const TotalPrice = styled.div`
  font-weight: 600;
  color: ${colors.red};
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10px;
  width: 90%;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: ${colors.red};
  svg {
    margin-left: 3px;
  }
`;
