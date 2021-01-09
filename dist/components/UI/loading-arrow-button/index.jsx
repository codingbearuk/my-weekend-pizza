"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_useanimations_1 = __importDefault(require("react-useanimations"));
var loading_1 = __importDefault(require("react-useanimations/lib/loading"));
var separator_1 = __importDefault(require("components/UI/separator"));
var loading_arrow_button_styles_1 = require("./loading-arrow-button.styles");
var ArrowButtonLoading = function (p) {
    return (<loading_arrow_button_styles_1.Container color={p.color}>
      Loading
      <separator_1.default width={10}/>
      <react_useanimations_1.default animation={loading_1.default}/>
    </loading_arrow_button_styles_1.Container>);
};
exports.default = ArrowButtonLoading;
