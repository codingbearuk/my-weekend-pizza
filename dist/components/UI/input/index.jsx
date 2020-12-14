"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var input_view_1 = __importDefault(require("./input.view"));
var Input = function (p) {
    function handleValueState(e) {
        var value = e.currentTarget.value;
        var inputName = e.currentTarget.name;
        p.callback(value, inputName);
    }
    return <input_view_1.default handleValueState={handleValueState} {...p}/>;
};
exports.default = Input;
