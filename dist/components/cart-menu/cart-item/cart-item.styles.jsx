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
exports.DeleteIconContainer = exports.Circe = exports.CItem = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n"])));
exports.CItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 10px;\n  padding: 10px 5px;\n  margin-bottom: 15px;\n  position: relative;\n  transition-duration: 0.3s;\n  ", "\n\n  img {\n    width: 80%;\n  }\n  h2 {\n    color: ", ";\n    font-size: 1em;\n    margin: 0;\n  }\n  p {\n    font-family: 'bradley hand';\n    color: ", ";\n    font-size: 1.2em;\n    margin: 0;\n  }\n"], ["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 10px;\n  padding: 10px 5px;\n  margin-bottom: 15px;\n  position: relative;\n  transition-duration: 0.3s;\n  ",
    "\n\n  img {\n    width: 80%;\n  }\n  h2 {\n    color: ", ";\n    font-size: 1em;\n    margin: 0;\n  }\n  p {\n    font-family: 'bradley hand';\n    color: ", ";\n    font-size: 1.2em;\n    margin: 0;\n  }\n"])), colors_1.default.background, function (p) {
    return p.isHover && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      filter: blur(3px);\n      opacity: 0.6;\n    "], ["\n      filter: blur(3px);\n      opacity: 0.6;\n    "])));
}, colors_1.default.yellow, colors_1.default.red);
exports.Circe = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  color: ", ";\n  background: ", ";\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n"], ["\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  color: ", ";\n  background: ", ";\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n"])), colors_1.default.background, colors_1.default.white);
exports.DeleteIconContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  svg {\n    font-size: 4em;\n    cursor: pointer;\n    color: ", ";\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  svg {\n    font-size: 4em;\n    cursor: pointer;\n    color: ", ";\n  }\n"])), colors_1.default.white);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
