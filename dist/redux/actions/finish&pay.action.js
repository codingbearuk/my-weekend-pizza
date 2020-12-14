"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDeliveryDate = exports.setDeliveryPrice = exports.closeFinishAndPayWindow = exports.openFinishAndPayWindow = void 0;
exports.openFinishAndPayWindow = function () { return ({
    type: 'OPEN_FINISH_AND_PAY_WINDOW',
}); };
exports.closeFinishAndPayWindow = function () { return ({
    type: 'CLOSE_FINISH_AND_PAY_WINDOW',
}); };
exports.setDeliveryPrice = function (price) { return ({
    type: 'SET_DELIVERY_PRICE',
    payload: price,
}); };
exports.setDeliveryDate = function (date) { return ({
    type: 'SET_DELIVERY_DATE',
    payload: date,
}); };
