"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var cart_styles_1 = require("./cart.styles");
var Cart = function (_a) {
    var numberOfItems = _a.numberOfItems, size = _a.size, numberSize = _a.numberSize, handleOnClick = _a.handleOnClick;
    return (<cart_styles_1.Container onClick={handleOnClick}>
      <react_bootstrap_icons_1.CartFill size={size}/>
      <cart_styles_1.ItemsNumberContainer size={numberSize}>{numberOfItems}</cart_styles_1.ItemsNumberContainer>
    </cart_styles_1.Container>);
};
exports.default = Cart;
