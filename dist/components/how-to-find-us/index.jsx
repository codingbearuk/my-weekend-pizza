"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var how_to_find_us_view_1 = __importDefault(require("./how-to-find-us.view"));
var HowToFindUs = function (p) {
    var details = {
        title: 'My Weekend Pizza',
        address: '2 Queen St',
        postcode: 'LL11 1AP',
        city: 'Wrexham',
        phone: '+44 0000 00 00',
        email: 'example@email.com',
    };
    return how_to_find_us_view_1.default({ details: details, id: p.id });
};
exports.default = HowToFindUs;
