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
exports.UpdateButton = exports.InputContainer = exports.Modal = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n  opacity: 0;\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n  opacity: 0;\n"])), colors_1.default.ultraTransparetnWhite);
exports.Modal = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 5px;\n  width: 80%;\n  height: 0;\n  position: relative;\n  overflow: hidden;\n  nav {\n    position: absolute;\n    top: 0;\n    right: 10px;\n    svg {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n  section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    h1 {\n      color: ", ";\n    }\n  }\n\n  @media (max-width: 500px) {\n    width: 95%;\n  }\n"], ["\n  background: ", ";\n  border-radius: 5px;\n  width: 80%;\n  height: 0;\n  position: relative;\n  overflow: hidden;\n  nav {\n    position: absolute;\n    top: 0;\n    right: 10px;\n    svg {\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n  section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    h1 {\n      color: ", ";\n    }\n  }\n\n  @media (max-width: 500px) {\n    width: 95%;\n  }\n"])), colors_1.default.white, colors_1.default.red, colors_1.default.black);
exports.InputContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  margin-bottom: 10px;\n  width: 80%;\n  div {\n    background: ", ";\n    border: 1px solid transparent;\n    border-radius: 5px 0 0 5px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 8px;\n    flex: 1;\n    color: ", ";\n    svg {\n      color: ", ";\n      ", "\n    }\n  }\n  input {\n    border: 1px solid ", ";\n    border-radius: 0 5px 5px 0;\n    outline: none;\n    background: none;\n    height: 100%;\n    text-align: center;\n    flex: 3;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  margin-bottom: 10px;\n  width: 80%;\n  div {\n    background: ", ";\n    border: 1px solid transparent;\n    border-radius: 5px 0 0 5px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 8px;\n    flex: 1;\n    color: ", ";\n    svg {\n      color: ", ";\n      ",
    "\n    }\n  }\n  input {\n    border: 1px solid ", ";\n    border-radius: 0 5px 5px 0;\n    outline: none;\n    background: none;\n    height: 100%;\n    text-align: center;\n    flex: 3;\n  }\n"])), colors_1.default.red, colors_1.default.white, colors_1.default.white, function (p) {
    return p.device === 'desktop' && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          margin-right: 5px;\n        "], ["\n          margin-right: 5px;\n        "])));
}, colors_1.default.red);
exports.UpdateButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 20px;\n  width: 90%;\n  margin: 0 5%;\n  border-radius: 5px;\n  background: ", ";\n  color: ", ";\n  padding: 10px;\n  text-transform: uppercase;\n  font-weight: 600;\n  border: none;\n  outline: none;\n"], ["\n  position: absolute;\n  bottom: 20px;\n  width: 90%;\n  margin: 0 5%;\n  border-radius: 5px;\n  background: ",
    ";\n  color: ", ";\n  padding: 10px;\n  text-transform: uppercase;\n  font-weight: 600;\n  border: none;\n  outline: none;\n"])), function (_a) {
    var isLoading = _a.isLoading, isUpdated = _a.isUpdated;
    return isLoading ? colors_1.default.inactive : isUpdated ? colors_1.default.success : colors_1.default.red;
}, colors_1.default.white);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
