"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.TopBar = exports.Window = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  backdrop-filter: blur(5px);\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  /* opacity: 0; */\n"], ["\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  backdrop-filter: blur(5px);\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  /* opacity: 0; */\n"])), colors_1.default.transparetnWhite);
exports.Window = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 10px;\n  color: ", ";\n  display: grid;\n  grid-template-rows: 5% 90% 5%;\n  height: 80%;\n  width: 80%;\n  /* opacity: 0; */\n"], ["\n  background: ", ";\n  border-radius: 10px;\n  color: ", ";\n  display: grid;\n  grid-template-rows: 5% 90% 5%;\n  height: 80%;\n  width: 80%;\n  /* opacity: 0; */\n"])), colors_1.default.white, colors_1.default.black);
exports.TopBar = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 10px;\n  svg {\n    cursor: pointer;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 10px;\n  svg {\n    cursor: pointer;\n  }\n"])));
exports.Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  overflow-y: auto;\n"], ["\n  overflow-y: auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
