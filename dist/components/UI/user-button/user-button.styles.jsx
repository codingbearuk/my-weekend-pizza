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
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  transition-duration: 0.2s;\n  p {\n    font-size: 0.8em;\n    margin: 0;\n  }\n  :hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  transition-duration: 0.2s;\n  p {\n    font-size: 0.8em;\n    margin: 0;\n  }\n  :hover {\n    border: 1px solid ", ";\n  }\n"])), colors_1.default.white);
var templateObject_1;
