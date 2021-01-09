"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case 'SET_PAGE_SCROLL_TRUE':
            state = true;
            return state;
        case 'SET_PAGE_SCROLL_FALSE':
            state = false;
            return state;
        default:
            return state;
    }
});
