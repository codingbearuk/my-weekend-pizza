import Action from "redux/actions/@action.t";

interface State {
  signUPMenu: boolean;
  signINMenu: boolean;
  cart: boolean;
}

const initial: State = {
  signUPMenu: false,
  signINMenu: false,
  cart: false,
};

export default (state: State = initial, action: Action) => {
  switch (action.type) {
    case "SIGN_UP_MENU_ON":
      state = { ...state, signUPMenu: true, signINMenu: false, cart: false };
      return state;

    case "SIGN_IN_MENU_ON":
      state = { ...state, signUPMenu: false, signINMenu: true, cart: false };
      return state;

    case "CART_MENU_ON":
      state = { ...state, signUPMenu: false, signINMenu: false, cart: true };
      return state;

    case "MENU_OFF":
      state = { ...state, signUPMenu: false, signINMenu: false, cart: false };
      return state;

    default:
      return state;
  }
};
