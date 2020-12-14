"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  font-size: 1.2em;\n  cursor: pointer;\n  outline: none;\n  svg {\n    color: ", ";\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  font-size: 1.2em;\n  cursor: pointer;\n  outline: none;\n  svg {\n    color: ", ";\n  }\n"])), function (p) { return p.color || colors_1.default.white; }, function (p) { return p.color || colors_1.default.white; });
var templateObject_1;
