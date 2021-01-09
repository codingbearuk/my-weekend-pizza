import Action from './@action.t';

export interface CartItem {
  _id: string;
  __v?: number;
  name: string;
  price: number;
  image: string;
  ingredients?: Array<string>;
  description?: string;
  size?: string;
  amount?: number;
}

export function addToCartAction(cartItem: CartItem): Action {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem,
  };
}

export function removeFromCartAction(cartItem: CartItem): Action {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: cartItem,
  };
}

export function restoreCart(cart: Array<CartItem>): Action {
  return {
    type: 'RESTORE_SHOPPING_CART',
    payload: cart,
  };
}
