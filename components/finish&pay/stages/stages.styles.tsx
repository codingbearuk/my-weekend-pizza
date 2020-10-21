import styled from 'styled-components';
import colors from 'styled/colors';

export const Container = styled.div`
  padding: 0 5%;
  position: relative;
  height: 100%;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItem = styled.div`
  margin-bottom: 15px;
  border: 1px dashed ${colors.yellow};
  padding: 10px;
  h3 {
    font-size: 1.3em;
  }
  p {
    margin: 0;
    font-size: 1em;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

export const DeliveryAddressInputsContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    color: ${colors.black};
  }
`;

export const PaymentContainer = styled.div`
  h2 {
    font-family: helvetica;
    font-size: 1.3em;
    margin-top: 10px;
  }
  section {
    padding: 10px 10%;
    section {
      display: grid;
      grid-template-columns: 48% 4% 48%;
      width: 100%;
      padding: 0;
    }
    div {
      grid-template-columns: 60px auto;
      div:first-child {
        border: 2px solid transparent;
        background: ${colors.yellow};
        width: 60px;
        svg {
          color: ${colors.white};
        }
      }
      input {
        border: 2px solid ${colors.yellow};
        color: ${colors.yellow};
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
