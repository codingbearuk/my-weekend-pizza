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
var react_redux_1 = require("react-redux");
var gsap_1 = __importDefault(require("gsap"));
var cart_menu_view_1 = __importDefault(require("./cart-menu.view"));
var finish_pay_action_1 = require("redux/actions/finish&pay.action");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var CartMenu = function (p) {
    var _a = react_1.useState(false), isModalActive = _a[0], setModalActive = _a[1];
    var _b = react_1.useState(false), isCartEmptyModal = _b[0], setCartEmptyModal = _b[1];
    var cartContent = react_redux_1.useSelector(function (s) { return s.cart; });
    var isUserLogged = react_redux_1.useSelector(function (s) { return s.user.isLogged; });
    var device = react_redux_1.useSelector(function (s) { return s.device.resolution; });
    var dispatch = react_redux_1.useDispatch();
    var handlePayButton = react_1.useCallback(function () {
        if (!isUserLogged)
            setModalActive(true);
        else if (cartContent.length < 1)
            setCartEmptyModal(true);
        else {
            dispatch(finish_pay_action_1.openFinishAndPayWindow());
            dispatch(navigation_actions_1.menuOFF());
        }
    }, []);
    var getTotalPrice = function () {
        var total = 0;
        for (var _i = 0, cartContent_1 = cartContent; _i < cartContent_1.length; _i++) {
            var item = cartContent_1[_i];
            if (item.size) {
                var price = item.price;
                var size = item.size[0];
                if (size === 'm')
                    price = price + 3;
                else if (size === 'l')
                    price = price + 5;
                total = total + price;
            }
            else if (item.amount) {
                var price = item.price;
                price = price * item.amount;
                total = total + price;
            }
        }
        return total;
    };
    var entryAnimation = function (container) {
        var tl = gsap_1.default.timeline({ repeat: 0, delay: 0 });
        tl.fromTo(container, {
            opacity: 0,
            height: 0,
        }, {
            opacity: 1,
            height: device === 'mobile' ? '85%' : 'auto',
            duration: 0.4,
        });
    };
    return (<cart_menu_view_1.default {...{
        cartContent: cartContent,
        totalPrice: getTotalPrice(),
        handlePayButton: handlePayButton,
        isModalActive: isModalActive,
        setModalActive: setModalActive,
        isCartEmptyModal: isCartEmptyModal,
        setCartEmptyModal: setCartEmptyModal,
        entryAnimation: entryAnimation,
    }}/>);
};
exports.default = CartMenu;
