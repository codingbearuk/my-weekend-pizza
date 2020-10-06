import React, { FunctionComponent } from 'react';
import { CartFill } from 'react-bootstrap-icons';

import { Container, ItemsNumberContainer } from './cart.styles';

const Cart: FunctionComponent<{
  numberOfItems: number;
  size: number;
  numberSize: number;
  handleOnClick: VoidFunction;
}> = ({ numberOfItems, size, numberSize, handleOnClick }) => {
  return (
    <Container onClick={handleOnClick}>
      <CartFill size={size} />
      <ItemsNumberContainer size={numberSize}>{numberOfItems}</ItemsNumberContainer>
    </Container>
  );
};

export default Cart;
