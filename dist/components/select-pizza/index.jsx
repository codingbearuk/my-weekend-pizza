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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var select_pizza_view_1 = __importDefault(require("./select-pizza.view"));
var cart_action_1 = require("redux/actions/cart.action");
var SelectPizza = function (p) {
    var _a = react_1.useState(p.pizzas.slice(0, 8)), pizzasArray = _a[0], setPizzasArray = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var handleAddPizzaToCart = react_1.useCallback(function (pizza, size) {
        var pizzaToAdd = __assign(__assign({}, pizza), { size: size });
        dispatch(cart_action_1.addToCartAction(pizzaToAdd));
    }, []);
    return <select_pizza_view_1.default {...{ pizzas: pizzasArray, handleAddPizzaToCart: handleAddPizzaToCart, id: p.id }}/>;
};
exports.default = SelectPizza;
