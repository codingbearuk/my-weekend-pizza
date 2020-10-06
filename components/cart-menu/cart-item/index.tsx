import React from 'react';
import { CartItem as CartItemType } from 'redux/actions/cart.action';

import { Container, Circe } from './cart-item.styles';
import Separator from 'components/UI/separator';

const CartItem: React.FunctionComponent<CartItemType> = p => {
  const saucePrice: string = (p.price * p.amount).toFixed(2);
  const pizzaPrice = (): string => {
    if (p.size[0] === 's') return p.price.toFixed(2);
    else if (p.size[0] === 'm') return (p.price + 3).toFixed(2);
    else return (p.price + 5).toFixed(2);
  };

  return (
    <Container>
      <img src={`/images/${p.description ? 'sauces' : 'pizzas'}/${p.image}`} alt={p.name} />
      <Separator height={20} />
      <h2>{p.name}</h2>
      <p>£{p.amount ? saucePrice : pizzaPrice()}</p>
      <Circe>{p.size ? p.size[0] : p.amount}</Circe>
    </Container>
  );
};

export default CartItem;
