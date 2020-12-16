"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colsePopup = exports.showPopup = void 0;
exports.showPopup = function (alert) {
    return {
        type: "SHOW_POPUP",
        payload: alert,
    };
};
exports.colsePopup = function () {
    return {
        type: "CLOSE_POPUP",
    };
};
