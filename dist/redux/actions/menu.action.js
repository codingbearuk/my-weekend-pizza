"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMenu = exports.openMenu = void 0;
function openMenu() {
    return {
        type: "OPEN_MAIN_MENU",
    };
}
exports.openMenu = openMenu;
function closeMenu() {
    return {
        type: "CLOSE_MAIN_MENU",
    };
}
exports.closeMenu = closeMenu;
