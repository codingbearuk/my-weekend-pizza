"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var cart_view_1 = __importDefault(require("./cart.view"));
var Cart = function (_a) {
    var iconSize = _a.iconSize, numberSize = _a.numberSize;
    var numberOfItems = react_redux_1.useSelector(function (s) { return s.cart.length; });
    var isCartOpen = react_redux_1.useSelector(function (s) { return s.navigationMenues.cart; });
    var dispatch = react_redux_1.useDispatch();
    var handleOnClick = function () {
        isCartOpen ? dispatch(navigation_actions_1.menuOFF()) : dispatch(navigation_actions_1.CartMenuON());
    };
    return (<cart_view_1.default numberOfItems={numberOfItems} size={iconSize} numberSize={numberSize} handleOnClick={handleOnClick}/>);
};
exports.default = Cart;
