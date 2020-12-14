"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var get_down_button_styles_1 = require("./get-down-button.styles");
var GetDownButton = function (p) {
    return (<get_down_button_styles_1.Container onClick={p.onClick}>
      <react_bootstrap_icons_1.Mouse />
      <react_bootstrap_icons_1.ArrowBarDown />
    </get_down_button_styles_1.Container>);
};
exports.default = GetDownButton;
