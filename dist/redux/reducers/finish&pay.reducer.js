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
    isOpen: false,
    deliveryPrice: 1,
    deliveryDate: new Date(),
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initial; }
    switch (action.type) {
        case 'OPEN_FINISH_AND_PAY_WINDOW':
            state = __assign(__assign({}, state), { isOpen: true });
            return state;
        case 'CLOSE_FINISH_AND_PAY_WINDOW':
            state = __assign(__assign({}, state), { isOpen: false });
            return state;
        case 'SET_DELIVERY_PRICE':
            state = __assign(__assign({}, state), { deliveryPrice: action.payload });
            return state;
        case 'SET_DELIVERY_DATE':
            state = __assign(__assign({}, state), { deliveryDate: action.payload });
            return state;
        default:
            return state;
    }
});
