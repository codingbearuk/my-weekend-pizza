import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';

import View from './cart-menu.view';
import { CartMenuType } from './cart-menu.t';
import { CartItem } from 'redux/actions/cart.action';
import { openFinishAndPayWindow } from 'redux/actions/finish&pay.action';
import { menuOFF } from 'redux/actions/navigation.actions';
import { RootState } from 'redux/reducers';

const CartMenu: React.FunctionComponent<CartMenuType> = p => {
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [isCartEmptyModal, setCartEmptyModal] = useState<boolean>(false);

  const cartContent: Array<CartItem> = useSelector((s: RootState) => s.cart);
  const isUserLogged: boolean = useSelector((s: RootState) => s.user.isLogged);
  const device: string = useSelector((s: RootState) => s.device.resolution);

  const dispatch = useDispatch();

  const handlePayButton = useCallback(() => {
    if (!isUserLogged) setModalActive(true);
    else if (cartContent.length < 1) setCartEmptyModal(true);
    else {
      dispatch(openFinishAndPayWindow());
      dispatch(menuOFF());
    }
  }, []);

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

  const entryAnimation = (container: React.RefObject<HTMLDivElement>) => {
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      container,
      {
        opacity: 0,
        height: 0,
      },
      {
        opacity: 1,
        height: device === 'mobile' ? '85%' : 'auto',
        duration: 0.4,
      }
    );
  };

  return (
    <View
      {...{
        cartContent,
        totalPrice: getTotalPrice(),
        handlePayButton,
        isModalActive,
        setModalActive,
        isCartEmptyModal,
        setCartEmptyModal,
        entryAnimation,
      }}
    />
  );
};

export default CartMenu;
