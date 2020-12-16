"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var separator_1 = __importDefault(require("components/UI/separator"));
var react_redux_1 = require("react-redux");
var user_button_styles_1 = require("./user-button.styles");
var UserButton = function (p) {
    var device = react_redux_1.useSelector(function (s) { return s.device.resolution; });
    return (<user_button_styles_1.Container onClick={p.onClick}>
      <react_bootstrap_icons_1.PersonSquare size={20}/>
      {device === 'desktop' && (<>
          <separator_1.default width={10}/>
          <p>{p.email}</p>
        </>)}
    </user_button_styles_1.Container>);
};
exports.default = UserButton;
