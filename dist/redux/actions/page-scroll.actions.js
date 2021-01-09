"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPageScrollFalse = exports.setPageScrollTrue = void 0;
exports.setPageScrollTrue = function () {
    return {
        type: 'SET_PAGE_SCROLL_TRUE',
    };
};
exports.setPageScrollFalse = function () {
    return {
        type: 'SET_PAGE_SCROLL_FALSE',
    };
};
