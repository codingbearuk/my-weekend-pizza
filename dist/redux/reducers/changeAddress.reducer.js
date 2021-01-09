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
    isActive: false,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initial; }
    switch (action.type) {
        case 'SET_CHANGE_ADDRESS_WINDOW_ACTIVE':
            state = __assign(__assign({}, state), { isActive: true });
            return state;
        case 'SET_CHANGE_ADDRESS_WINDOW_INACTIVE':
            state = __assign(__assign({}, state), { isActive: false });
            return state;
        default:
            return state;
    }
});
