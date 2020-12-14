"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var initial = {
    signUPMenu: false,
    signINMenu: false,
    userMenu: false,
    cart: false,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initial; }
    switch (action.type) {
        case 'SIGN_UP_MENU_ON':
            state = __assign(__assign({}, state), { signUPMenu: true, signINMenu: false, userMenu: false, cart: false });
            return state;
        case 'SIGN_IN_MENU_ON':
            state = __assign(__assign({}, state), { signUPMenu: false, signINMenu: true, userMenu: false, cart: false });
            return state;
        case 'CART_MENU_ON':
            state = __assign(__assign({}, state), { signUPMenu: false, signINMenu: false, userMenu: false, cart: true });
            return state;
        case 'USER_MENU_ON':
            state = __assign(__assign({}, state), { signUPMenu: false, signINMenu: false, userMenu: true, cart: false });
            return state;
        case 'MENU_OFF':
            state = __assign(__assign({}, state), { signUPMenu: false, signINMenu: false, userMenu: false, cart: false });
            return state;
        default:
            return state;
    }
});
