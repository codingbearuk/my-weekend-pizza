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
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding-bottom: 30px;\n  :after {\n    content: '';\n    width: 80%;\n    border-bottom: 2px solid ", ";\n    position: absolute;\n    bottom: 0;\n  }\n  h1 {\n    font-size: 2.2em;\n    margin: 0;\n    padding: 0;\n    margin-right: 5px;\n  }\n  img {\n    height: 2.2em;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding-bottom: 30px;\n  :after {\n    content: '';\n    width: 80%;\n    border-bottom: 2px solid ", ";\n    position: absolute;\n    bottom: 0;\n  }\n  h1 {\n    font-size: 2.2em;\n    margin: 0;\n    padding: 0;\n    margin-right: 5px;\n  }\n  img {\n    height: 2.2em;\n  }\n"])), colors_1.default.white);
var templateObject_1;
