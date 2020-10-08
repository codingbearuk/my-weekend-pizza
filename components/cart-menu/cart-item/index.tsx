import React, { useCallback, useState } from 'react';
import { CartItem as CartItemType } from 'redux/actions/cart.action';
import { TrashFill } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';

import { CItem, Circe, DeleteIconContainer, Container } from './cart-item.styles';
import { removeFromCartAction } from 'redux/actions/cart.action';
import { CartMenuON, menuOFF } from 'redux/actions/navigation.actions';
import Separator from 'components/UI/separator';

const CartItem: React.FunctionComponent<CartItemType> = p => {
  const [isHover, setHover] = useState<boolean>(false);

  const dispatch = useDispatch();

  const saucePrice: string = (p.price * p.amount).toFixed(2);

  const pizzaPrice = (): string => {
    if (p.size[0] === 's') return p.price.toFixed(2);
    else if (p.size[0] === 'm') return (p.price + 3).toFixed(2);
    else return (p.price + 5).toFixed(2);
  };

  const handleMouseEnter: VoidFunction = useCallback(() => setHover(true), [isHover]);
  const handleMouseLeave: VoidFunction = useCallback(() => setHover(false), [isHover]);

  const handleDeleteFromCart: VoidFunction = useCallback(() => {
    dispatch(removeFromCartAction(p));
    dispatch(menuOFF());
    dispatch(CartMenuON());
  }, []);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CItem isHover={isHover}>
        <img src={`/images/${p.description ? 'sauces' : 'pizzas'}/${p.image}`} alt={p.name} />
        <Separator height={20} />
        <h2>{p.name}</h2>
        <p>£{p.amount ? saucePrice : pizzaPrice()}</p>
        <Circe>{p.size ? p.size[0] : p.amount}</Circe>
      </CItem>
      {isHover && (
        <DeleteIconContainer>
          <TrashFill onClick={handleDeleteFromCart} />
        </DeleteIconContainer>
      )}
    </Container>
  );
};

export default CartItem;
