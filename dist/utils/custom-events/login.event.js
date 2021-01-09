"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginEventHandle = void 0;
var createLoginEvent = function (sessionID) {
    var login = new CustomEvent("login", {
        detail: {
            sessionID: sessionID,
        },
    });
    window.dispatchEvent(login);
};
exports.loginEventHandle = function (sessionID) {
    localStorage.setItem("sessionID", sessionID);
};
exports.default = createLoginEvent;
