"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.TopBar = exports.Wrapper = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  backdrop-filter: blur(15px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  backdrop-filter: blur(15px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"])), colors_1.default.transparetnWhite);
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 500px;\n  box-shadow: 0 0 30px 2px ", ";\n  border-radius: 5px;\n"], ["\n  width: 500px;\n  box-shadow: 0 0 30px 2px ", ";\n  border-radius: 5px;\n"])), colors_1.default.black);
exports.TopBar = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  padding: 10px;\n  p {\n    color: ", ";\n    margin: 0;\n    display: flex;\n    justify-content: center;\n  }\n"], ["\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  padding: 10px;\n  p {\n    color: ", ";\n    margin: 0;\n    display: flex;\n    justify-content: center;\n  }\n"])), colors_1.default.red, colors_1.default.white);
exports.Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  border-radius: 0 0 5px 5px;\n  text-align: center;\n  color: ", ";\n  padding: 20px 10px;\n"], ["\n  width: 100%;\n  background: ", ";\n  border-radius: 0 0 5px 5px;\n  text-align: center;\n  color: ", ";\n  padding: 20px 10px;\n"])), colors_1.default.white, colors_1.default.red);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
