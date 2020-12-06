import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { restoreCart, CartItem } from 'redux/actions/cart.action';
import POST from 'api-comunication/post';
import io from 'socket.io-client';

import View from './payment-succes.view';

interface PaymentSuccesType {
  state: string;
}

const PaymentSucces: React.FunctionComponent<PaymentSuccesType> = p => {
  const router = useRouter();
  const dispatch = useDispatch();

  let orderID: string | any = router.query.id;
  orderID = orderID.substring(0, orderID.length - 1);
  const paymentStatus: any = router.query.payment;

  const handleSaveOrder = useCallback(async () => {
    window.localStorage.removeItem(orderID);
  }, []);

  const handleReBuildShoppingCart = useCallback(() => {
    const savedLocalStorage: string = window.localStorage.getItem(orderID);
    const savedCart: Array<CartItem> = JSON.parse(savedLocalStorage);
    dispatch(restoreCart(savedCart));
  }, []);

  const handleDeleteCanceledOrder = useCallback(async () => {
    await POST('/payment/finnish-order', {
      status: 'cancel',
      id: orderID,
    });
  }, []);

  const handleCloseWindow = useCallback(() => {
    router.push('/');
  }, []);

  const emitWebsocketOrder = useCallback(() => {
    const socket = io();
    socket.on('connect', () => {
      console.info(`io socked connected, your id is: ${socket.id}`);
    });
    socket.emit('new-order');
  }, []);

  useEffect(() => {
    if (paymentStatus === 'success') {
      handleSaveOrder();
      emitWebsocketOrder();
    } else {
      handleReBuildShoppingCart();
      handleDeleteCanceledOrder();
    }
  }, []);

  return View({
    success: p.state === 'success' ? true : false,
    handleCloseButton: handleCloseWindow,
  });
};

export default PaymentSucces;
