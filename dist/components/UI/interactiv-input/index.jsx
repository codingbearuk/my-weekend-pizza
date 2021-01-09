"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var interactiv_input_styles_1 = require("./interactiv-input.styles");
var InteractivInput = function (P) {
    var _a = react_1.useState(false), isActive = _a[0], setActive = _a[1];
    var _b = react_1.useState(''), value = _b[0], setValue = _b[1];
    var handleInput = function (value, name) {
        setValue(value);
        P.inputHandler(value, name);
    };
    return (<interactiv_input_styles_1.Container isActive={isActive}>
      <interactiv_input_styles_1.Icon isActive={isActive}>
        <P.icon />
      </interactiv_input_styles_1.Icon>
      <interactiv_input_styles_1.Input name={P.name} placeholder={P.title} onFocus={function () { return setActive(true); }} onBlur={function () { return setActive(false); }} value={value} onChange={function (e) { return handleInput(e.target.value, e.target.name); }}/>
    </interactiv_input_styles_1.Container>);
};
exports.default = InteractivInput;
