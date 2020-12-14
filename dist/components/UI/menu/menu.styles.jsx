"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AroundContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  backdrop-filter: blur(10px);\n  border-radius: 5px;\n  position: fixed;\n  z-index: 1000;\n  top: 70px;\n  left: ", "px;\n  transform: translateX(-50%);\n  overflow: hidden;\n  height: 0;\n\n  @media (max-width: 500px) {\n    width: 90vw;\n    left: 0;\n    margin: 0 5vw;\n    transform: translateX(0px);\n  }\n"], ["\n  background: ", ";\n  backdrop-filter: blur(10px);\n  border-radius: 5px;\n  position: fixed;\n  z-index: 1000;\n  top: 70px;\n  left: ", "px;\n  transform: translateX(-50%);\n  overflow: hidden;\n  height: 0;\n\n  @media (max-width: 500px) {\n    width: 90vw;\n    left: 0;\n    margin: 0 5vw;\n    transform: translateX(0px);\n  }\n"])), colors_1.default.transparetnWhite, function (p) { return p.positionLeft + p.buttonWidth / 2; });
exports.AroundContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 100px;\n  left: 0;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 100px;\n  left: 0;\n"])));
var templateObject_1, templateObject_2;
