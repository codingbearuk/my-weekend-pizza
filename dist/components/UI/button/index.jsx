"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_styles_1 = require("./button.styles");
var Button = function (p) {
    return <button_styles_1.Container onClick={p.onClick}>{p.text}</button_styles_1.Container>;
};
exports.default = Button;
