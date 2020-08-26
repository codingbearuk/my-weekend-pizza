import React, { FunctionComponent } from "react";
import { CartFill } from "react-bootstrap-icons";

import { Container, ItemsNumberContainer } from "./cart.styles";

const Cart: FunctionComponent<{
  numberOfItems: number;
  size: number;
  numberSize: number;
}> = ({ numberOfItems, size, numberSize }) => {
  return (
    <Container>
      <CartFill size={size} />
      <ItemsNumberContainer size={numberSize}>
        {numberOfItems}
      </ItemsNumberContainer>
    </Container>
  );
};

export default Cart;
