import Action from "redux/actions/@action.t";

export function signUpMenuON(): Action {
  return {
    type: "SIGN_UP_MENU_ON",
  };
}

export function signInMenuON(): Action {
  return {
    type: "SIGN_IN_MENU_ON",
  };
}

export function CartMenuON(): Action {
  return {
    type: "CART_MENU_ON",
  };
}

export function menuOFF(): Action {
  return {
    type: "MENU_OFF",
  };
}
