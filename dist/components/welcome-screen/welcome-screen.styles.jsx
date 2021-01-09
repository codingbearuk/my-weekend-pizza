"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonContainer = exports.Logo = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: url(/images/Image1@2x.png);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  z-index: 50;\n  @media (max-width: 500px) {\n    background-size: 200% 100%;\n    background-position: 50% 100%;\n  }\n"], ["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: url(/images/Image1@2x.png);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  z-index: 50;\n  @media (max-width: 500px) {\n    background-size: 200% 100%;\n    background-position: 50% 100%;\n  }\n"])));
exports.Logo = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  transform: translateY(-50%);\n  height: 35%;\n  z-index: 50;\n\n  @media (max-width: 500px) {\n    height: 20%;\n    left: 5%;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  transform: translateY(-50%);\n  height: 35%;\n  z-index: 50;\n\n  @media (max-width: 500px) {\n    height: 20%;\n    left: 5%;\n  }\n"])));
exports.ButtonContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n"], ["\n  position: absolute;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n"])));
var templateObject_1, templateObject_2, templateObject_3;
