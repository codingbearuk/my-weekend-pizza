"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlusOne = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  svg {\n    color: ", ";\n    font-size: 1.7em;\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  svg {\n    color: ", ";\n    font-size: 1.7em;\n    cursor: pointer;\n  }\n"])), colors_1.default.yellow);
exports.PlusOne = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: -10px;\n  right: -30px;\n  font-weight: 600;\n  font-size: 1.3rem;\n  opacity: 0;\n"], ["\n  position: absolute;\n  bottom: -10px;\n  right: -30px;\n  font-weight: 600;\n  font-size: 1.3rem;\n  opacity: 0;\n"])));
var templateObject_1, templateObject_2;
