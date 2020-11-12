import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { restoreCart, CartItem } from 'redux/actions/cart.action';
import POST from 'api-comunication/post';

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
    // let req: any;
    // do {
    //   req = await POST('/payment/finnish-order', {
    //     status: 'success',
    //     id: orderID,
    //   });
    // } while (req.status !== 'ok');
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

  useEffect(() => {
    if (paymentStatus === 'success') {
      handleSaveOrder();
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
