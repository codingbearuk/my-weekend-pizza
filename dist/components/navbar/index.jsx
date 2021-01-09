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
var navbar_view_1 = __importDefault(require("./navbar.view"));
var menu_action_1 = require("redux/actions/menu.action");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var Navbar = function (p) {
    var mainMenuState = react_redux_1.useSelector(function (s) { return s.mainMenu; });
    var signInMenuState = react_redux_1.useSelector(function (s) { return s.navigationMenues.signINMenu; });
    var signUpMenuState = react_redux_1.useSelector(function (s) { return s.navigationMenues.signUPMenu; });
    var userMenuState = react_redux_1.useSelector(function (s) { return s.navigationMenues.userMenu; });
    var cartMenuState = react_redux_1.useSelector(function (s) { return s.navigationMenues.cart; });
    var isUserLoggedState = react_redux_1.useSelector(function (s) { return s.user.isLogged; });
    var emailState = react_redux_1.useSelector(function (s) { return s.user.email; });
    var isPageScrolled = react_redux_1.useSelector(function (s) { return s.pageScroll; });
    var dispatch = react_redux_1.useDispatch();
    var signInButton = react_1.useRef(null);
    var signUpButton = react_1.useRef(null);
    var userButton = react_1.useRef(null);
    var handleMainMenuButton = react_1.useCallback(function () {
        dispatch(mainMenuState ? menu_action_1.closeMenu() : menu_action_1.openMenu());
    }, [mainMenuState]);
    var handleSignInMenuButton = react_1.useCallback(function () {
        dispatch(signInMenuState ? navigation_actions_1.menuOFF() : navigation_actions_1.signInMenuON());
    }, [signInMenuState]);
    var handleSignUpMenuButton = react_1.useCallback(function () {
        dispatch(signUpMenuState ? navigation_actions_1.menuOFF() : navigation_actions_1.signUpMenuON());
    }, [signUpMenuState]);
    var handleUserMenuButton = react_1.useCallback(function () {
        dispatch(userMenuState ? navigation_actions_1.menuOFF() : navigation_actions_1.userMenuON());
    }, [userMenuState]);
    return (<navbar_view_1.default handlers={{
        handleMainMenuButton: handleMainMenuButton,
        handleSignInMenuButton: handleSignInMenuButton,
        handleSignUpMenuButton: handleSignUpMenuButton,
        handleUserMenuButton: handleUserMenuButton,
    }} state={{
        mainMenuState: mainMenuState,
        signInMenuState: signInMenuState,
        signUpMenuState: signUpMenuState,
        isUserLoggedState: isUserLoggedState,
        emailState: emailState,
        userMenuState: userMenuState,
        isPageScrolled: isPageScrolled,
        cartMenuState: cartMenuState,
    }} refs={{ signInButton: signInButton, signUpButton: signUpButton, userButton: userButton }}/>);
};
exports.default = Navbar;
