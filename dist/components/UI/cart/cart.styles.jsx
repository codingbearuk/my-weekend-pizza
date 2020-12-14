"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsNumberContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    margin-right: 5px;\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    margin-right: 5px;\n  }\n"])), colors_1.default.white);
exports.ItemsNumberContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n"])), colors_1.default.white, function (p) { return p.size + "px" || "1.2rem"; });
var templateObject_1, templateObject_2;
