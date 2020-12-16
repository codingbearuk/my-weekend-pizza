"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var stage_dots_styled_1 = require("./stage-dots.styled");
var StageDots = function (p) {
    var createStages = function () {
        var stages = [];
        for (var i = 1; i <= p.numberOfStages; i++) {
            stages = __spreadArrays(stages, [i]);
        }
        return stages;
    };
    var checkIfActive = function (index) {
        var dotNo = index + 1;
        if (dotNo === p.activeStage)
            return true;
        else
            return false;
    };
    var stages = createStages();
    return (<stage_dots_styled_1.Container>
      {stages.map(function (dot, index) { return (<stage_dots_styled_1.Dot key={index} active={checkIfActive(index)} title={"" + dot} onClick={function () { return p.setStage(dot); }}/>); })}
    </stage_dots_styled_1.Container>);
};
exports.default = StageDots;
