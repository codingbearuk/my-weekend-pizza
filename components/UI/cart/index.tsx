import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import { CartMenuON, menuOFF } from 'redux/actions/navigation.actions';

import View from './cart.view';

const Cart: FunctionComponent<{ iconSize: number; numberSize?: number }> = ({ iconSize, numberSize }) => {
  const numberOfItems = useSelector((s: RootState) => s.cart.length);
  const isCartOpen: boolean = useSelector((s: RootState) => s.navigationMenues.cart);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    isCartOpen ? dispatch(menuOFF()) : dispatch(CartMenuON());
  };

  return (
    <View
      numberOfItems={numberOfItems}
      size={iconSize}
      numberSize={numberSize}
      handleOnClick={handleOnClick}
    />
  );
};

export default Cart;
