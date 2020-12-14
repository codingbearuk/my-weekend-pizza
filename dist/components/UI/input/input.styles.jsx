"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputElement = exports.IconContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 25% 75%;\n  width: 100%;\n  height: 30px;\n"], ["\n  display: grid;\n  grid-template-columns: 25% 75%;\n  width: 100%;\n  height: 30px;\n"])));
exports.IconContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 50px 0 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  border-radius: 50px 0 0 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    color: ", ";\n  }\n"])), colors_1.default.white, colors_1.default.black);
exports.InputElement = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 0 50px 50px 0;\n  border: 1px solid ", ";\n  background: none;\n  outline: none;\n  text-align: center;\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  border-radius: 0 50px 50px 0;\n  border: 1px solid ", ";\n  background: none;\n  outline: none;\n  text-align: center;\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n"])), colors_1.default.white, colors_1.default.white, colors_1.default.white);
var templateObject_1, templateObject_2, templateObject_3;
