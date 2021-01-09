"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = [];
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            state.push(action.payload);
            return state;
        case 'REMOVE_ITEM_FROM_CART':
            var idArray = state.map(function (item) { return item._id; });
            var index = idArray.indexOf(action.payload._id);
            state.splice(index, 1);
            return state;
        case 'RESTORE_SHOPPING_CART':
            state = action.payload;
            return state;
        default:
            return state;
    }
});
