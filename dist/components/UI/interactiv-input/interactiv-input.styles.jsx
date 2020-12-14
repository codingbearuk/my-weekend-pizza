"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Icon = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  border: 1px solid ", ";\n  border-radius: 50px;\n  overflow: hidden;\n  max-width: 280px;\n  height: 35px;\n  transition: 0.2s;\n  position: relative;\n  ", "\n"], ["\n  display: flex;\n  border: 1px solid ", ";\n  border-radius: 50px;\n  overflow: hidden;\n  max-width: 280px;\n  height: 35px;\n  transition: 0.2s;\n  position: relative;\n  ",
    "\n"])), colors_1.default.red, function (_a) {
    var isActive = _a.isActive;
    return isActive && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), colors_1.default.red);
});
exports.Icon = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  background: ", ";\n  width: 20%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.8s;\n  left: 0;\n  svg {\n    color: ", ";\n    font-size: 1.2em;\n  }\n  ", "\n"], ["\n  position: absolute;\n  background: ", ";\n  width: 20%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.8s;\n  left: 0;\n  svg {\n    color: ", ";\n    font-size: 1.2em;\n  }\n  ",
    "\n"])), colors_1.default.red, colors_1.default.yellow, function (_a) {
    var isActive = _a.isActive;
    return isActive && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      left: 80%;\n      background: none;\n    "], ["\n      left: 80%;\n      background: none;\n    "])));
});
exports.Input = styled_components_1.default.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 80%;\n  background: none;\n  border: none;\n  outline: none;\n  text-align: center;\n  caret-color: ", ";\n  color: ", ";\n  padding-left: 20%;\n  :focus {\n    font-weight: 600;\n    padding-left: 0;\n    padding-right: 20%;\n  }\n  ::placeholder {\n    color: ", ";\n  }\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    transition: background-color 5000s;\n    -webkit-text-fill-color: ", " !important;\n  }\n"], ["\n  width: 80%;\n  background: none;\n  border: none;\n  outline: none;\n  text-align: center;\n  caret-color: ", ";\n  color: ", ";\n  padding-left: 20%;\n  :focus {\n    font-weight: 600;\n    padding-left: 0;\n    padding-right: 20%;\n  }\n  ::placeholder {\n    color: ", ";\n  }\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    transition: background-color 5000s;\n    -webkit-text-fill-color: ", " !important;\n  }\n"])), colors_1.default.yellow, colors_1.default.yellow, colors_1.default.yellow, colors_1.default.yellow);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
