"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getPrice_1 = __importDefault(require("./getPrice"));
var getTotal = function (cart) {
    var prices = [];
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var item = cart_1[_i];
        var price = getPrice_1.default(item.price, item.size, item.amount);
        prices = __spreadArrays(prices, [price]);
    }
    var total = 0;
    for (var _a = 0, prices_1 = prices; _a < prices_1.length; _a++) {
        var price = prices_1[_a];
        total = total + price;
    }
    return total;
};
exports.default = getTotal;
