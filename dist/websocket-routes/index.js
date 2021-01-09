"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("./connection"));
var orders_websocket_1 = __importDefault(require("./orders.websocket"));
exports.default = {
    connection: connection_1.default,
    orders: orders_websocket_1.default,
};
