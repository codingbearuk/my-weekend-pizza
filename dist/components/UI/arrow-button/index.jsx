"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var separator_1 = __importDefault(require("components/UI/separator"));
var arrow_button_styles_1 = require("./arrow-button.styles");
var ArrowButton = function (p) {
    return (<arrow_button_styles_1.Container color={p.color} onClick={p.onClick}>
      {p.children}
      <separator_1.default width={10}/>
      <react_bootstrap_icons_1.ArrowRightCircleFill />
    </arrow_button_styles_1.Container>);
};
exports.default = ArrowButton;
