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
exports.PizzaLogoContainer = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  position: fixed;\n  width: 100vw;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 5%;\n  z-index: 99;\n  svg {\n    color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  ",
    ";\n  position: fixed;\n  width: 100vw;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 5%;\n  z-index: 99;\n  svg {\n    color: ", ";\n    cursor: pointer;\n  }\n"])), function (p) {
    return p.isScrolled && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      backdrop-filter: blur(5px);\n      background: ", ";\n      flex-direction: row-reverse;\n    "], ["\n      backdrop-filter: blur(5px);\n      background: ", ";\n      flex-direction: row-reverse;\n    "])), colors_1.default.transparetnWhite);
}, colors_1.default.white);
exports.PizzaLogoContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    height: 90%;\n  }\n  p {\n    margin: 0;\n    font-family: 'bradley hand';\n    font-size: 1.4em;\n  }\n"], ["\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    height: 90%;\n  }\n  p {\n    margin: 0;\n    font-family: 'bradley hand';\n    font-size: 1.4em;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
