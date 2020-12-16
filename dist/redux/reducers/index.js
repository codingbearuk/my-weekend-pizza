"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var cart_reducer_1 = __importDefault(require("./cart.reducer"));
var language_reducer_1 = __importDefault(require("./language.reducer"));
var main_menu_reducer_1 = __importDefault(require("./main-menu.reducer"));
var navigation_menues_reducer_1 = __importDefault(require("./navigation-menues.reducer"));
var popup_reducer_1 = __importDefault(require("./popup.reducer"));
var login_reducer_1 = __importDefault(require("./login.reducer"));
var page_scroll_reducer_1 = __importDefault(require("./page-scroll.reducer"));
var finish_pay_reducer_1 = __importDefault(require("./finish&pay.reducer"));
var device_reducer_1 = __importDefault(require("./device.reducer"));
var changeAddress_reducer_1 = __importDefault(require("./changeAddress.reducer"));
var rootReducer = redux_1.combineReducers({
    cart: cart_reducer_1.default,
    language: language_reducer_1.default,
    mainMenu: main_menu_reducer_1.default,
    navigationMenues: navigation_menues_reducer_1.default,
    popup: popup_reducer_1.default,
    user: login_reducer_1.default,
    pageScroll: page_scroll_reducer_1.default,
    finishAndPay: finish_pay_reducer_1.default,
    device: device_reducer_1.default,
    changeAddress: changeAddress_reducer_1.default,
});
exports.default = rootReducer;
