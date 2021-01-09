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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var select_sauce_view_1 = __importDefault(require("./select-sauce.view"));
var cart_action_1 = require("redux/actions/cart.action");
var SelectSauce = function (p) {
    var dispatch = react_redux_1.useDispatch();
    var handleAddSauceToCart = function (sauce, amount) {
        var sauceToAdd = __assign(__assign({}, sauce), { amount: amount });
        dispatch(cart_action_1.addToCartAction(sauceToAdd));
    };
    return <select_sauce_view_1.default {...{ sauces: p.sauces, handleAddSauceToCart: handleAddSauceToCart, id: p.id }}/>;
};
exports.default = SelectSauce;
