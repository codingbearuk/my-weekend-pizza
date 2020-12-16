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
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var close_button_styles_1 = require("./close-button.styles");
var CloseButton = function (p) {
    var _a = react_1.useState(false), isHover = _a[0], setHover = _a[1];
    var handeMouseEnter = react_1.useCallback(function () { return setHover(true); }, []);
    var handeMouseLeave = react_1.useCallback(function () { return setHover(false); }, []);
    return (<close_button_styles_1.Container onMouseEnter={handeMouseEnter} onMouseLeave={handeMouseLeave}>
      {isHover ? <react_bootstrap_icons_1.XCircleFill onClick={p.onClick}/> : <react_bootstrap_icons_1.XCircle />}
    </close_button_styles_1.Container>);
};
exports.default = CloseButton;
