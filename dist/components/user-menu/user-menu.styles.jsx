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
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n\n  button {\n    width: 100%;\n    :not(:last-child) {\n      border-bottom: 1px dashed ", ";\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n\n  button {\n    width: 100%;\n    :not(:last-child) {\n      border-bottom: 1px dashed ", ";\n    }\n  }\n"])), function (p) { return (p.device === 'mobile' ? '100vw' : p.width + 'px'); }, colors_1.default.white);
var templateObject_1;
