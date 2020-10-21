import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';

import View from './third-stage.view';
import getTotal from '../getTotal';

interface ThirdStepType {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setNoStages: React.Dispatch<React.SetStateAction<number>>;
}

interface PaymentDetails {
  cardholder: string;
  cardNo: string;
  express: string;
  cvv: string;
}

const ThirdStep: React.FunctionComponent<ThirdStepType> = p => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardholder: '',
    cardNo: '',
    express: '',
    cvv: '',
  });

  const cart = useSelector((s: RootState) => s.cart);
  const finnishAndPayState = useSelector((s: RootState) => s.finishAndPay);

  const handleNextButton = useCallback(() => {
    setLoading(true);
    // p.setNoStages(4);
    // p.setStage(4);
  }, [paymentDetails]);

  const handleInputs = useCallback((value: string, inputName: string) => {
    if (inputName === 'name') setPaymentDetails({ ...paymentDetails, cardholder: value });
    else if (inputName === 'number') setPaymentDetails({ ...paymentDetails, cardNo: value });
    else if (inputName === 'express') setPaymentDetails({ ...paymentDetails, express: value });
    else if (inputName === 'cvv') setPaymentDetails({ ...paymentDetails, cvv: value });
  }, []);

  const fullPrice = useCallback((): number => {
    const orderPrice: number = getTotal(cart);
    const deliveryPrice: number = finnishAndPayState.deliveryPrice;
    return orderPrice + deliveryPrice;
  }, []);

  return View({
    handlers: {
      handleNextButton,
      handleInputs,
    },
    fullPrice: fullPrice(),
    isLoading,
  });
};

export default ThirdStep;
