"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var carret_button_styles_1 = require("./carret-button.styles");
var View = function (p) {
    return (<carret_button_styles_1.Container onClick={p.handleOnClickAnimation}>
      <react_bootstrap_icons_1.CartPlus />
      {p.isActive && <carret_button_styles_1.PlusOne ref={p.refs.plusOne}>+1</carret_button_styles_1.PlusOne>}
    </carret_button_styles_1.Container>);
};
exports.default = View;
