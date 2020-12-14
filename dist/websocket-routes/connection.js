"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var connection = function (socket) {
    console.info('websocket connection ok');
    socket.emit('connection-status', 'connected');
    socket.on('get-orders', function () { return index_1.default.orders(socket); });
    socket.on('new-order', function () { return index_1.default.orders(socket); });
};
exports.default = connection;
