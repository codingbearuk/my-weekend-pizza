import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import { useStripe } from '@stripe/react-stripe-js';
import POST from 'api-comunication/post';

import View from './third-stage.view';
import getTotal from '../getTotal';

interface ThirdStepType {}

const ThirdStep: React.FunctionComponent<ThirdStepType> = p => {
  const cart = useSelector((s: RootState) => s.cart);
  const user = useSelector((s: RootState) => s.user);
  const finnishAndPayState = useSelector((s: RootState) => s.finishAndPay);

  const stripe = useStripe();

  const handleNextButton = async () => {
    const paymentSessionID: any = await POST('/create-checkout-session', {
      amount: fullPrice(),
      cart: JSON.stringify(cart),
      address: {
        city: user.city,
        postcode: user.postcode,
        address: user.adress,
        phone: user.phone,
      },
    });

    const cartStringify: string = JSON.stringify(cart);
    window.localStorage.setItem(paymentSessionID.id, cartStringify);

    const result = await stripe.redirectToCheckout({ sessionId: paymentSessionID.session_id });
    if (result.error) alert(result.error);
  };

  const fullPrice = useCallback((): number => {
    const orderPrice: number = getTotal(cart);
    const deliveryPrice: number = finnishAndPayState.deliveryPrice;
    return orderPrice + deliveryPrice;
  }, []);

  return View({
    handlers: {
      handleNextButton,
    },
    fullPrice: fullPrice(),
    deliveryPrice: finnishAndPayState.deliveryPrice,
    cartItems: cart.map(item => ({
      name: item.name,
      price: item.price,
      size: item.size,
      amount: item.amount,
    })),
  });
};

export default ThirdStep;
