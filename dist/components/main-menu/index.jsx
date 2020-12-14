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
var gsap_1 = require("gsap");
var menu_action_1 = require("redux/actions/menu.action");
var main_menu_view_1 = __importDefault(require("./main-menu.view"));
var MainMenu = function (_a) {
    var mainMenuState = react_redux_1.useSelector(function (s) { return s.mainMenu; });
    var dispatch = react_redux_1.useDispatch();
    var handleCloseMainMenu = react_1.useCallback(function () {
        dispatch(menu_action_1.closeMenu());
    }, []);
    var enterAnimation = react_1.useCallback(function (container, menu) {
        var tl = gsap_1.gsap.timeline({ repeat: 0, delay: 0 });
        tl.fromTo(container.current, {
            opacity: 0,
            duration: 0.5,
        }, {
            opacity: 1,
        }).fromTo(menu.current, {
            opacity: 0,
            x: -500,
            duration: 0.6,
        }, {
            opacity: 1,
            x: 0,
        });
    }, []);
    var handleMenuItemClick = react_1.useCallback(function (id) {
        var element = document.getElementById(id);
        var position = element.offsetTop;
        scrollTo(0, position);
        handleCloseMainMenu();
    }, []);
    var closeAnimation = react_1.useCallback(function (container, menu) {
        var tl = gsap_1.gsap.timeline({ repeat: 0, delay: 0 });
        tl.to(menu.current, {
            opacity: 0,
            x: -500,
            duration: 0.3,
        })
            .to(container.current, {
            opacity: 0,
            duration: 0.3,
        })
            .then(function () { return handleCloseMainMenu(); });
    }, []);
    return (<main_menu_view_1.default handleMenuItemClick={handleMenuItemClick} closeMenu={handleCloseMainMenu} animations={{
        enter: enterAnimation,
        close: closeAnimation,
    }}/>);
};
exports.default = MainMenu;
