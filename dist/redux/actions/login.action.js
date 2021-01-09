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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.changeDetails = exports.loginUser = void 0;
var post_1 = __importDefault(require("api-comunication/post"));
var navigation_actions_1 = require("./navigation.actions");
exports.loginUser = function () { return function (dispatch) {
    var id = localStorage.getItem('sessionID');
    var body = {
        sessionID: id,
    };
    post_1.default('/authorisation', body).then(function (data) {
        if (data.status === 'ok') {
            var action = {
                type: 'LOGIN_USER',
                payload: __assign({}, data.user),
            };
            dispatch(navigation_actions_1.menuOFF());
            dispatch(action);
        }
    });
}; };
exports.changeDetails = function (name, value) { return ({
    type: 'CHANGE_DETAILS',
    payload: { name: name, value: value },
}); };
exports.logoutUser = function () {
    localStorage.removeItem('sessionID');
    return {
        type: 'LOGOUT_USER',
    };
};
