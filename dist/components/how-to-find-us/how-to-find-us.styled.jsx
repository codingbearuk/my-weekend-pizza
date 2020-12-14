"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsContainer = exports.MapContainer = exports.ContentContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("styled/colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 100vw;\n"], ["\n  max-width: 100vw;\n"])));
exports.ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 60% 40%;\n  margin: 50px 10%;\n  @media (max-width: 500px) {\n    grid-template-columns: 100%;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 60% 40%;\n  margin: 50px 10%;\n  @media (max-width: 500px) {\n    grid-template-columns: 100%;\n  }\n"])));
exports.MapContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  iframe {\n    border: none;\n    border-radius: 20px;\n    @media (max-width: 500px) {\n      width: 100%;\n      margin-bottom: 30px;\n    }\n  }\n"], ["\n  iframe {\n    border: none;\n    border-radius: 20px;\n    @media (max-width: 500px) {\n      width: 100%;\n      margin-bottom: 30px;\n    }\n  }\n"])));
exports.DetailsContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h2 {\n    color: ", ";\n    text-align: left;\n  }\n  h3 {\n    font-family: 'bradley hand';\n    margin: 0;\n    padding: 0;\n    font-size: 1.3em;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    svg {\n      color: ", ";\n      font-size: 1.5em;\n    }\n    p {\n      padding: 0;\n      margin: 0;\n    }\n  }\n  @media (max-width: 500px) {\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h2 {\n    color: ", ";\n    text-align: left;\n  }\n  h3 {\n    font-family: 'bradley hand';\n    margin: 0;\n    padding: 0;\n    font-size: 1.3em;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    svg {\n      color: ", ";\n      font-size: 1.5em;\n    }\n    p {\n      padding: 0;\n      margin: 0;\n    }\n  }\n  @media (max-width: 500px) {\n    align-items: center;\n  }\n"])), colors_1.default.yellow, colors_1.default.yellow);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
