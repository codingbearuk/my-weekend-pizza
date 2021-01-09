"use strict";
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
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var react_redux_1 = require("react-redux");
var cart_item_styles_1 = require("./cart-item.styles");
var cart_action_1 = require("redux/actions/cart.action");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var separator_1 = __importDefault(require("components/UI/separator"));
var CartItem = function (p) {
    var _a = react_1.useState(false), isHover = _a[0], setHover = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var saucePrice = (p.price * p.amount).toFixed(2);
    var pizzaPrice = function () {
        if (p.size[0] === 's')
            return p.price.toFixed(2);
        else if (p.size[0] === 'm')
            return (p.price + 3).toFixed(2);
        else
            return (p.price + 5).toFixed(2);
    };
    var handleMouseEnter = react_1.useCallback(function () { return setHover(true); }, [isHover]);
    var handleMouseLeave = react_1.useCallback(function () { return setHover(false); }, [isHover]);
    var handleDeleteFromCart = react_1.useCallback(function () {
        dispatch(cart_action_1.removeFromCartAction(p));
        dispatch(navigation_actions_1.menuOFF());
        dispatch(navigation_actions_1.CartMenuON());
    }, []);
    return (<cart_item_styles_1.Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <cart_item_styles_1.CItem isHover={isHover}>
        <img src={"/images/" + (p.description ? 'sauces' : 'pizzas') + "/" + p.image} alt={p.name}/>
        <separator_1.default height={20}/>
        <h2>{p.name}</h2>
        <p>£{p.amount ? saucePrice : pizzaPrice()}</p>
        <cart_item_styles_1.Circe>{p.size ? p.size[0] : p.amount}</cart_item_styles_1.Circe>
      </cart_item_styles_1.CItem>
      {isHover && (<cart_item_styles_1.DeleteIconContainer>
          <react_bootstrap_icons_1.TrashFill onClick={handleDeleteFromCart}/>
        </cart_item_styles_1.DeleteIconContainer>)}
    </cart_item_styles_1.Container>);
};
exports.default = CartItem;
