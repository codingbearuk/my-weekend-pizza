import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Truck, CreditCardFill } from 'react-bootstrap-icons';

import {
  Container,
  Title,
  CartItem,
  Button,
  PriceContainer,
  DeliveryAddressInputsContainer,
  TotalContainer,
  TotalPrice,
} from '../stages.styles';
import getTotal from '../getTotal';

import language from 'language-sources';
import { RootState } from 'redux/reducers';
import Separator from 'components/UI/separator';
import locationKey from 'locationQ';
import { setDeliveryPrice } from 'redux/actions/finish&pay.action';

interface SecondStageType {
  setStage: (stage: number) => void;
  setNoStages: React.Dispatch<React.SetStateAction<number>>;
}

const SecondStage: React.FunctionComponent<SecondStageType> = p => {
  const cart = useSelector((s: RootState) => s.cart);
  const user = useSelector((s: RootState) => s.user);
  const finnishAndPayState = useSelector((s: RootState) => s.finishAndPay);

  const dispatch = useDispatch();

  const getDeliveryPrice = async () => {
    let myLocation = await fetch(
      `https://eu1.locationiq.com/v1/search.php?key=${locationKey}&city=${user.city}&country=great%britain&street=${user.adress}&format=json`
    ).then(res => res.json());
    const lat = myLocation[0].lat;
    const lon = myLocation[0].lon;
    const wrexLat = '53.046910';
    const wrexLon = '-2.991670';

    const coordString = `${lon},${lat};${wrexLon},${wrexLat}`;
    let getRoute: any = await fetch(
      `https://eu1.locationiq.com/v1/directions/driving/${coordString}?key=${locationKey}`
    ).then(res => res.json());

    const distance = getRoute.routes[0].distance;
    const distanceInMiles = Math.round(distance * 0.000621371192);
    if (distanceInMiles <= 5) dispatch(setDeliveryPrice(1));
    else if (distanceInMiles <= 10) dispatch(setDeliveryPrice(2));
    else if (distanceInMiles <= 15) dispatch(setDeliveryPrice(5));
    else if (distanceInMiles <= 20) dispatch(setDeliveryPrice(10));
    else if (distanceInMiles <= 30) dispatch(setDeliveryPrice(20));
    else if (distanceInMiles <= 40) dispatch(setDeliveryPrice(30));
    else if (distanceInMiles <= 50) dispatch(setDeliveryPrice(40));
    else if (distanceInMiles <= 60) dispatch(setDeliveryPrice(50));
    else if (distanceInMiles <= 70) dispatch(setDeliveryPrice(60));
    else dispatch(setDeliveryPrice(100));
  };

  const handleNextButton = useCallback(() => {
    p.setNoStages(3);
    p.setStage(3);
  }, []);

  useEffect(() => {
    getDeliveryPrice();
  }, []);

  return (
    <Container>
      <Title>
        <Truck />
        <Separator width={25} />
        {language.finishAndPay.secondStepTitle}
      </Title>
      <CartItem>
        <h3>{language.finishAndPay.deliveryAddress}</h3>
        <React.Fragment>
          <p>{user.adress}</p>
          <p>
            {user.city} {user.postcode}
          </p>
        </React.Fragment>
      </CartItem>
      <PriceContainer>
        <strong>
          + £{finnishAndPayState.deliveryPrice} {language.finishAndPay.plusDelivery}
        </strong>
      </PriceContainer>
      <TotalContainer>
        <Button onClick={handleNextButton}>
          {language.finishAndPay.secondStepButton} <CreditCardFill />
        </Button>
        <TotalPrice>Total: £{(getTotal(cart) + finnishAndPayState.deliveryPrice).toFixed(2)}</TotalPrice>
      </TotalContainer>
    </Container>
  );
};

export default SecondStage;
