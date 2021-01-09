"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("./test"));
var delete_pizza_1 = __importDefault(require("./delete-pizza"));
var delete_sauce_1 = __importDefault(require("./delete-sauce"));
var index = {
    test: test_1.default,
    deletePizza: delete_pizza_1.default,
    deleteSauce: delete_sauce_1.default,
};
exports.default = index;
