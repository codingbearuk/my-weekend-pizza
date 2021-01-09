"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_down_button_1 = __importDefault(require("components/UI/get-down-button"));
var welcome_screen_styles_1 = require("./welcome-screen.styles");
var View = function (_a) {
    return (<welcome_screen_styles_1.Container>
      <welcome_screen_styles_1.Logo src='/images/logo-big.png' alt='logo'/>
      <welcome_screen_styles_1.ButtonContainer>
        <get_down_button_1.default />
      </welcome_screen_styles_1.ButtonContainer>
    </welcome_screen_styles_1.Container>);
};
exports.default = View;
