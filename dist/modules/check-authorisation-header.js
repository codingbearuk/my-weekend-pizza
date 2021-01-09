"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkAuthorisationHeader = function (authHeader) {
    if (authHeader === "Bearer " + process.env.AUTH_KEY)
        return true;
    else
        return false;
};
exports.default = checkAuthorisationHeader;
