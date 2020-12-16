"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var colors_1 = require("./colors");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @font-face {\n    font-family: 'bradley hand';\n    src: url('fonts/bradhitc.ttf');\n  }\n  @font-face {\n    font-family: 'helvetica';\n    src: url('fonts/Helvetica.ttf');\n  }\n  @font-face {\n    font-family: 'helvetica-light';\n    src: url('fonts/helvetica-light.ttf');\n  }\n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  body {\n    background: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n\n    ::-webkit-scrollbar{\n        width: 8px;\n        background-color: ", ";\n\n    }\n\n    ::-webkit-scrollbar-thumb{\n        border-radius: 10px;\n        box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n        background-color: ", ";\n    }\n  }\n\n  h1, h2 {\n    font-family: 'bradley hand';\n    text-align: center;\n  }\n  p{\n    font-family: 'helvetica';\n  }\n  button {\n    font-family: 'helvetica-light';\n    font-weight: 100;\n  }\n"], ["\n  @font-face {\n    font-family: 'bradley hand';\n    src: url('fonts/bradhitc.ttf');\n  }\n  @font-face {\n    font-family: 'helvetica';\n    src: url('fonts/Helvetica.ttf');\n  }\n  @font-face {\n    font-family: 'helvetica-light';\n    src: url('fonts/helvetica-light.ttf');\n  }\n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  body {\n    background: ", ";\n    color: ", ";\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n\n    ::-webkit-scrollbar{\n        width: 8px;\n        background-color: ", ";\n\n    }\n\n    ::-webkit-scrollbar-thumb{\n        border-radius: 10px;\n        box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n        background-color: ", ";\n    }\n  }\n\n  h1, h2 {\n    font-family: 'bradley hand';\n    text-align: center;\n  }\n  p{\n    font-family: 'helvetica';\n  }\n  button {\n    font-family: 'helvetica-light';\n    font-weight: 100;\n  }\n"])), colors_1.background, colors_1.white, colors_1.ultraTransparetnWhite, colors_1.red);
exports.default = GlobalStyle;
var templateObject_1;
