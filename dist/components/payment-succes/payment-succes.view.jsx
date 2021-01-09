"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var language_sources_1 = __importDefault(require("language-sources"));
var payment_succes_styles_1 = require("./payment-succes.styles");
var View = function (p) {
    return (<payment_succes_styles_1.Container>
      <payment_succes_styles_1.ContentWindow success={p.success}>
        {p.success ? <react_bootstrap_icons_1.CartCheck /> : <react_bootstrap_icons_1.X />}
        <h1>{p.success ? language_sources_1.default.finishAndPay.complete.title : language_sources_1.default.finishAndPay.cancelWindow.title}</h1>
        <h2>
          {p.success ? language_sources_1.default.finishAndPay.complete.content : language_sources_1.default.finishAndPay.cancelWindow.content}
        </h2>
        <p>{p.success && language_sources_1.default.finishAndPay.complete.info}</p>
        <payment_succes_styles_1.Button success={p.success} onClick={p.handleCloseButton}>
          {language_sources_1.default.finishAndPay.complete.button}
        </payment_succes_styles_1.Button>
      </payment_succes_styles_1.ContentWindow>
    </payment_succes_styles_1.Container>);
};
exports.default = View;
