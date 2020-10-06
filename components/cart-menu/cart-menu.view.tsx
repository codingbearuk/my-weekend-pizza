import React from 'react';
import language from 'language-sources';

import { Container, Content, CartContent, Footer } from './cart-menu.styles';
import { CartItem as CartItemType } from 'redux/actions/cart.action';
import CartItem from './cart-item';

const View: React.FunctionComponent<{ cartContent: Array<CartItemType>; totalPrice: number }> = p => {
  return (
    <Container>
      <h1>{language.cart.title}</h1>
      <Content>
        <CartContent>
          {p.cartContent.map(cartItem => (
            <CartItem key={cartItem._id} {...cartItem} />
          ))}
        </CartContent>
      </Content>
      <Footer>
        <div>Total: £{p.totalPrice}</div>
      </Footer>
    </Container>
  );
};

export default View;
