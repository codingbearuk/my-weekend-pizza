"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("./test"));
var get_one_pizza_1 = __importDefault(require("./get-one-pizza"));
var get_pizzas_1 = __importDefault(require("./get-pizzas"));
var get_one_sauce_1 = __importDefault(require("./get-one-sauce"));
var get_sauces_1 = __importDefault(require("./get-sauces"));
var finnish_order_1 = __importDefault(require("./finnish-order"));
var get_orders_1 = __importDefault(require("./get-orders"));
var index = {
    test: test_1.default,
    getOnePizza: get_one_pizza_1.default,
    getPizzas: get_pizzas_1.default,
    getOneSauce: get_one_sauce_1.default,
    getSauces: get_sauces_1.default,
    finnishOrder: finnish_order_1.default,
    getOrders: get_orders_1.default,
};
exports.default = index;
