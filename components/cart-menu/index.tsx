import React from 'react';
import { useSelector } from 'react-redux';

import View from './cart-menu.view';
import { CartMenuType } from './cart-menu.t';
import { CartItem } from 'redux/actions/cart.action';
import { RootState } from 'redux/reducers';

const CartMenu: React.FunctionComponent<CartMenuType> = p => {
  const cartContent: Array<CartItem> = useSelector((s: RootState) => s.cart);

  const getTotalPrice = (): number => {
    let total: number = 0;
    for (let item of cartContent) {
      if (item.size) {
        let price: number = item.price;
        const size: string = item.size[0];
        if (size === 'm') price = price + 3;
        else if (size === 'l') price = price + 5;
        total = total + price;
      } else if (item.amount) {
        let price: number = item.price;
        price = price * item.amount;
        total = total + price;
      }
    }
    return total;
  };

  return <View {...{ cartContent, totalPrice: getTotalPrice() }} />;
};

export default CartMenu;
