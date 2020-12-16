"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __importDefault(require("redux/store"));
var eng_1 = __importDefault(require("./eng"));
var getLanguage = function () {
    var current = store_1.default.getState().language;
    if (current === "eng") {
        return eng_1.default;
    }
};
exports.default = getLanguage();
