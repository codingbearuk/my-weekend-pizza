"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBox = exports.ButtonContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 220px;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 220px;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
exports.ButtonContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"])));
exports.ErrorBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  font-weight: 100;\n  font-size: 0.7em;\n  text-align: center;\n"], ["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  font-weight: 100;\n  font-size: 0.7em;\n  text-align: center;\n"])), colors_1.default.red);
var templateObject_1, templateObject_2, templateObject_3;
