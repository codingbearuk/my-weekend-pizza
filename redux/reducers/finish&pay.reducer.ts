import Action from 'redux/actions/@action.t';

interface State {
  isOpen: boolean;
  deliveryPrice: number;
}

const initial = {
  isOpen: false,
  deliveryPrice: 1,
};

export default (state: State = initial, action: Action): State => {
  switch (action.type) {
    case 'OPEN_FINISH_AND_PAY_WINDOW':
      state = { ...state, isOpen: true };
      return state;
    case 'CLOSE_FINISH_AND_PAY_WINDOW':
      state = { ...state, isOpen: false };
      return state;
    case 'SET_DELIVERY_PRICE':
      state = { ...state, deliveryPrice: action.payload };
      return state;

    default:
      return state;
  }
};
