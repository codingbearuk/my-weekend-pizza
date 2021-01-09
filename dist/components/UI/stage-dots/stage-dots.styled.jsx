"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dot = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n"])));
exports.Dot = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: ", ";\n  cursor: pointer;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"], ["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: ", ";\n  cursor: pointer;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"])), function (_a) {
    var active = _a.active;
    return (active ? colors_1.default.red : colors_1.default.yellow);
});
var templateObject_1, templateObject_2;
