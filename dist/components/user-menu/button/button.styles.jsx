"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: ", ";\n  padding: 10px;\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    color: ", ";\n  }\n  :active {\n    background: ", ";\n    color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"], ["\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: ", ";\n  padding: 10px;\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    color: ", ";\n  }\n  :active {\n    background: ", ";\n    color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"])), colors_1.default.white, colors_1.default.white, colors_1.default.white, colors_1.default.black, colors_1.default.black);
var templateObject_1;
