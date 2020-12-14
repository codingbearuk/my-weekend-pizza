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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var close_button_1 = __importDefault(require("components/UI/close-button"));
var separator_1 = __importDefault(require("components/UI/separator"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var popup_styles_1 = require("./popup.styles");
var Popup = function (p) {
    var switchOffScroll = react_1.useCallback(function () {
        window.scrollTo(0, 0);
    }, []);
    return (<popup_styles_1.Container onScroll={switchOffScroll}>
      <popup_styles_1.Wrapper>
        <popup_styles_1.TopBar>
          <close_button_1.default onClick={p.close}/>
          <p>
            <react_bootstrap_icons_1.ShieldFillExclamation />
            <separator_1.default width={5}/>
            {p.title}
          </p>
          <div />
        </popup_styles_1.TopBar>
        <popup_styles_1.Content>{p.msg}</popup_styles_1.Content>
      </popup_styles_1.Wrapper>
    </popup_styles_1.Container>);
};
exports.default = Popup;
