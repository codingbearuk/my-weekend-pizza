import Action from './@action.t';

export const openFinishAndPayWindow = (): Action => ({
  type: 'OPEN_FINISH_AND_PAY_WINDOW',
});

export const closeFinishAndPayWindow = (): Action => ({
  type: 'CLOSE_FINISH_AND_PAY_WINDOW',
});

export const setDeliveryPrice = (price: number): Action => ({
  type: 'SET_DELIVERY_PRICE',
  payload: price,
});
