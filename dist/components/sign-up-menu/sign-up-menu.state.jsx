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
    email: "",
    password: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    errors: {
        email: false,
        password: false,
        address: false,
        city: false,
        postcode: false,
        phone: false,
        general: "",
    },
};
function reducer(state, action) {
    var newErrors = __assign({}, state.errors);
    switch (action.type) {
        case "insert email":
            state = __assign(__assign({}, state), { email: action.payload.email });
            return state;
        case "insert password":
            state = __assign(__assign({}, state), { password: action.payload.password });
            return state;
        case "insert address":
            state = __assign(__assign({}, state), { address: action.payload.address });
            return state;
        case "insert city":
            state = __assign(__assign({}, state), { city: action.payload.city });
            return state;
        case "insert postcode":
            state = __assign(__assign({}, state), { postcode: action.payload.postcode });
            return state;
        case "insert phone":
            state = __assign(__assign({}, state), { phone: action.payload.phone });
            return state;
        case "throw error":
            newErrors[action.payload.errorType] = true;
            state = __assign(__assign({}, state), { errors: newErrors });
            return state;
        case "release error":
            newErrors[action.payload.errorType] = false;
            state = __assign(__assign({}, state), { errors: newErrors });
            return state;
        case "throw general error":
            newErrors["general"] = action.payload.generalError;
            state = __assign(__assign({}, state), { errors: newErrors });
            return state;
        case "release general error":
            newErrors["general"] = "";
            state = __assign(__assign({}, state), { errors: newErrors });
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;
