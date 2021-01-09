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
    isLogged: false,
    email: '',
    adress: '',
    city: '',
    postcode: '',
    phone: 0,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initial; }
    switch (action.type) {
        case 'LOGIN_USER':
            state = __assign(__assign({}, state), { isLogged: true, email: action.payload.email, adress: action.payload.adress, city: action.payload.city, postcode: action.payload.postcode, phone: action.payload.phone });
            return state;
        case 'LOGOUT_USER':
            state = initial;
            return state;
        case 'CHANGE_DETAILS':
            if (action.payload.name === 'address')
                state = __assign(__assign({}, state), { adress: action.payload.value });
            else if (action.payload.name === 'city')
                state = __assign(__assign({}, state), { city: action.payload.value });
            else if (action.payload.name === 'postcode')
                state = __assign(__assign({}, state), { postcode: action.payload.value });
            else if (action.payload.name === 'phone')
                state = __assign(__assign({}, state), { phone: action.payload.value });
            return state;
        default:
            return state;
    }
});
