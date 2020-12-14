"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogoutEvent = exports.dispatchLogout = void 0;
var store_1 = __importDefault(require("redux/store"));
var login_action_1 = require("redux/actions/login.action");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var logoutEvent;
if (process.browser)
    logoutEvent = new CustomEvent('logout');
exports.dispatchLogout = function () { return window.dispatchEvent(logoutEvent); };
exports.handleLogoutEvent = function () {
    store_1.default.dispatch(login_action_1.logoutUser());
    store_1.default.dispatch(navigation_actions_1.menuOFF());
};
