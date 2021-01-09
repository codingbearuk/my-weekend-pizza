import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import locationKey from 'locationQ';
import { setDeliveryPrice } from 'redux/actions/finish&pay.action';
import { setHours, setMinutes } from 'date-fns';

import View from './second.view';
import { setDeliveryDate as setDeliveryDateAction } from 'redux/actions/finish&pay.action';

interface SecondStageType {
  setStage: (stage: number) => void;
  setNoStages: React.Dispatch<React.SetStateAction<number>>;
}

const SecondStage: React.FunctionComponent<SecondStageType> = p => {
  const [deliveryDate, setDeliveryDate] = useState<Date>(setHours(setMinutes(new Date(), 30), 13));
  const user = useSelector((s: RootState) => s.user);

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

  const handleSetDate = date => {
    setDeliveryDate(date);
    dispatch(setDeliveryDateAction(date));
  };

  const handleSetStartAndEndDate = (): { start: Date; end: Date } => {
    const today: Date = setHours(setMinutes(new Date(), 30), 13);
    const dayOfWeek: number = today.getDay();

    const getNewDate = (plusDays: number): Date => {
      const date: string = `${today.getMonth() + 1}.${today.getDate() + plusDays}.${today.getFullYear()}`;
      return setHours(setMinutes(new Date(date), 0), 12);
    };

    const toReturn = (startDays: number, endDays: number): { start: Date; end: Date } => {
      const objectToReturn = { start: getNewDate(startDays), end: getNewDate(endDays) };
      return objectToReturn;
    };

    switch (dayOfWeek) {
      case 0:
        return toReturn(0, 0);
      case 1:
        return toReturn(5, 6);
      case 2:
        return toReturn(4, 5);
      case 3:
        return toReturn(3, 4);
      case 4:
        return toReturn(2, 3);
      case 5:
        return toReturn(1, 2);
      case 6:
        return toReturn(0, 1);
    }
  };

  useEffect(() => {
    getDeliveryPrice();
    setDeliveryDate(handleSetStartAndEndDate().start);
    dispatch(setDeliveryDateAction(handleSetStartAndEndDate().start));
  }, []);

  return View({
    state: {
      deliveryDate,
    },
    handlers: {
      handleNextButton,
      handleSetDate,
      handleSetStartAndEndDate,
    },
  });
};

export default SecondStage;
