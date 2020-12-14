"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreCart = exports.removeFromCartAction = exports.addToCartAction = void 0;
function addToCartAction(cartItem) {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: cartItem,
    };
}
exports.addToCartAction = addToCartAction;
function removeFromCartAction(cartItem) {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        payload: cartItem,
    };
}
exports.removeFromCartAction = removeFromCartAction;
function restoreCart(cart) {
    return {
        type: 'RESTORE_SHOPPING_CART',
        payload: cart,
    };
}
exports.restoreCart = restoreCart;
