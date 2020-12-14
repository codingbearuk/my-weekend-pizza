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
exports.DisplayOnHover = exports.Price = exports.IngredientsContainer = exports.Container = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 30px;\n  ", "\n  h2 {\n    font-size: 1.5em;\n    margin: 10px 0;\n    color: ", ";\n  }\n  img {\n    width: 70%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 30px;\n  ",
    "\n  h2 {\n    font-size: 1.5em;\n    margin: 10px 0;\n    color: ", ";\n  }\n  img {\n    width: 70%;\n  }\n"])), function (p) {
    return p.isHover
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          border: 2px solid ", ";\n        "], ["\n          border: 2px solid ", ";\n        "])), colors_1.default.yellow) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          border: 2px solid transparent;\n        "], ["\n          border: 2px solid transparent;\n        "])));
}, colors_1.default.yellow);
exports.IngredientsContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: center;\n  font-weight: 100;\n  font-size: 0.7em;\n"], ["\n  text-align: center;\n  font-weight: 100;\n  font-size: 0.7em;\n"])));
exports.Price = styled_components_1.default.strong(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  font-family: 'bradley hand';\n  font-size: 1.5em;\n"], ["\n  color: ", ";\n  font-family: 'bradley hand';\n  font-size: 1.5em;\n"])), colors_1.default.red);
exports.DisplayOnHover = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n  height: 80px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n  height: 80px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
