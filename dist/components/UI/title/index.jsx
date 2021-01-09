"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var title_styles_1 = require("./title.styles");
var Title = function (p) {
    return (<title_styles_1.Container>
      <h1>{p.children}</h1>
      <img src={"/images/" + p.imageName} alt={p.imageName}/>
    </title_styles_1.Container>);
};
exports.default = Title;
