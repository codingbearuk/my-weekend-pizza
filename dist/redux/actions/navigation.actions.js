"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuOFF = exports.userMenuON = exports.CartMenuON = exports.signInMenuON = exports.signUpMenuON = void 0;
function signUpMenuON() {
    return {
        type: 'SIGN_UP_MENU_ON',
    };
}
exports.signUpMenuON = signUpMenuON;
function signInMenuON() {
    return {
        type: 'SIGN_IN_MENU_ON',
    };
}
exports.signInMenuON = signInMenuON;
function CartMenuON() {
    return {
        type: 'CART_MENU_ON',
    };
}
exports.CartMenuON = CartMenuON;
function userMenuON() {
    return {
        type: 'USER_MENU_ON',
    };
}
exports.userMenuON = userMenuON;
function menuOFF() {
    return {
        type: 'MENU_OFF',
    };
}
exports.menuOFF = menuOFF;
