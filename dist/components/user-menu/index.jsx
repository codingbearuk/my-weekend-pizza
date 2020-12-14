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
var change_address_action_1 = require("redux/actions/change-address.action");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var logout_event_1 = require("utils/custom-events/logout.event");
var user_menu_view_1 = __importDefault(require("./user-menu.view"));
var UserMenu = function (p) {
    var positionLeft = p.buttonRef.current.offsetLeft;
    var buttonWidth = p.buttonRef.current.offsetWidth;
    var dispatch = react_redux_1.useDispatch();
    var handleLogout = react_1.useCallback(function () {
        logout_event_1.dispatchLogout();
    }, []);
    var handleChangeAddress = react_1.useCallback(function () {
        dispatch(change_address_action_1.setActive());
        dispatch(navigation_actions_1.menuOFF());
    }, []);
    var menuMethods = {
        logout: handleLogout,
        changeAddress: handleChangeAddress,
    };
    var viewProps = { positionLeft: positionLeft, buttonWidth: buttonWidth, menuMethods: menuMethods };
    return <user_menu_view_1.default {...viewProps}/>;
};
exports.default = UserMenu;
