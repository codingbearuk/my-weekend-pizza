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
exports.Button = exports.ContentWindow = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n"], ["\n  background: ", ";\n  backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n"])), colors_1.default.ultraTransparetnWhite);
exports.ContentWindow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 5px;\n  height: 80%;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  svg {\n    color: ", ";\n    font-size: 6em;\n  }\n  h1,\n  h2,\n  p {\n    color: ", ";\n  }\n  h1 {\n    font-size: 2.2em;\n  }\n  h2 {\n    font-family: 'helvetica';\n    font-size: 1.3em;\n  }\n  p {\n    font-size: 1em;\n  }\n"], ["\n  background: ", ";\n  border-radius: 5px;\n  height: 80%;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  svg {\n    color: ", ";\n    font-size: 6em;\n  }\n  h1,\n  h2,\n  p {\n    color: ", ";\n  }\n  h1 {\n    font-size: 2.2em;\n  }\n  h2 {\n    font-family: 'helvetica';\n    font-size: 1.3em;\n  }\n  p {\n    font-size: 1em;\n  }\n"])), colors_1.default.white, function (p) { return (p.success ? colors_1.default.success : colors_1.default.red); }, colors_1.default.black);
exports.Button = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 5px;\n  padding: 5px 10px;\n  position: absolute;\n  bottom: 25px;\n  ", "\n"], ["\n  border-radius: 5px;\n  padding: 5px 10px;\n  position: absolute;\n  bottom: 25px;\n  ",
    "\n"])), function (_a) {
    var success = _a.success;
    return success
        ? styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          border: 1px solid ", ";\n          color: ", ";\n        "], ["\n          border: 1px solid ", ";\n          color: ", ";\n        "])), colors_1.default.success, colors_1.default.success) : styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          border: 1px solid ", ";\n          color: ", ";\n        "], ["\n          border: 1px solid ", ";\n          color: ", ";\n        "])), colors_1.default.red, colors_1.default.red);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
