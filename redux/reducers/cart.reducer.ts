import { CartItem } from "../actions/cart.action";
import Action from "../actions/@action.t";

const initialState: Array<CartItem> = [];

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      state.push(action.payload);
      return state;
    case "REMOVE_ITEM_FROM_CART":
      const index: number = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    default:
      return state;
  }
};
