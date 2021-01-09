"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 30px 5%;\n"], ["\n  padding: 30px 5%;\n"])));
exports.PizzasContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  padding: 0 5%;\n  @media (max-width: 500px) {\n    grid-template-columns: 100%;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  padding: 0 5%;\n  @media (max-width: 500px) {\n    grid-template-columns: 100%;\n  }\n"])));
var templateObject_1, templateObject_2;
