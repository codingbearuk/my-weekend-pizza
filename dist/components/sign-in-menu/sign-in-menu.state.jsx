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
exports.reducer = exports.initialState = void 0;
exports.initialState = {
    login: '',
    password: '',
    loading: false,
    error: '',
};
function reducer(state, action) {
    switch (action.type) {
        case 'INPUT_LOGIN':
            state = __assign(__assign({}, state), { login: action.payload.login });
            return state;
        case 'INPUT_PASSWORD':
            state = __assign(__assign({}, state), { password: action.payload.password });
            return state;
        case 'SET_LOADING':
            state = __assign(__assign({}, state), { loading: action.payload.loading });
            return state;
        case 'SET_ERROR':
            state = __assign(__assign({}, state), { error: action.payload.error });
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;
