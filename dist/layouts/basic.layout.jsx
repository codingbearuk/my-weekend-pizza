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
var global_styles_1 = __importDefault(require("../styled/global.styles"));
var react_redux_1 = require("react-redux");
var popup_1 = __importDefault(require("components/UI/popup"));
var popup_action_1 = require("redux/actions/popup.action");
var login_action_1 = require("redux/actions/login.action");
var page_scroll_actions_1 = require("redux/actions/page-scroll.actions");
var device_action_1 = require("redux/actions/device.action");
var login_event_1 = require("utils/custom-events/login.event");
var logout_event_1 = require("utils/custom-events/logout.event");
var BasicLayout = function (_a) {
    var children = _a.children;
    var isPopupOpen = react_redux_1.useSelector(function (s) { return s.popup.isOpen; });
    var popupTitle = react_redux_1.useSelector(function (s) { return s.popup.title; });
    var popupMsg = react_redux_1.useSelector(function (s) { return s.popup.msg; });
    var dispatch = react_redux_1.useDispatch();
    var loginListener = function () {
        window.addEventListener('login', function (e) {
            login_event_1.loginEventHandle(e.detail.sessionID);
            dispatch(login_action_1.loginUser());
        });
    };
    var logoutListener = function () {
        window.addEventListener('logout', function () {
            logout_event_1.handleLogoutEvent();
        });
    };
    var loginUserIfSessionID = function () {
        var id = localStorage.getItem('sessionID');
        if (id)
            dispatch(login_action_1.loginUser());
    };
    var handlePageScroll = function () {
        var getScroll = function () {
            var scrollPosition = window.scrollY;
            if (scrollPosition >= 150)
                dispatch(page_scroll_actions_1.setPageScrollTrue());
            else
                dispatch(page_scroll_actions_1.setPageScrollFalse());
        };
        getScroll();
        document.addEventListener('scroll', getScroll);
    };
    var setDevice = function () {
        var setDevice = function () {
            var displayWidth = window.innerWidth;
            if (displayWidth > 500)
                dispatch(device_action_1.setDesktop());
            else
                dispatch(device_action_1.setMobile());
        };
        setDevice();
        window.addEventListener('resize', setDevice);
    };
    react_1.useEffect(function () {
        loginListener();
        loginUserIfSessionID();
        logoutListener();
        handlePageScroll();
        setDevice();
    }, []);
    return (<react_1.default.Fragment>
      <global_styles_1.default />
      {isPopupOpen && (<popup_1.default close={function () {
        dispatch(popup_action_1.colsePopup());
    }} title={popupTitle} msg={popupMsg}/>)}
      {children}
    </react_1.default.Fragment>);
};
exports.default = BasicLayout;
