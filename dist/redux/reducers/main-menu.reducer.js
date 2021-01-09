"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case "OPEN_MAIN_MENU":
            return true;
        case "CLOSE_MAIN_MENU":
            return false;
        default:
            return state;
    }
}
exports.default = default_1;
