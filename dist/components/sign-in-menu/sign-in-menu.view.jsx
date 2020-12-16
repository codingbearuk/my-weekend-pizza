"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var menu_1 = __importDefault(require("components/UI/menu"));
var input_1 = __importDefault(require("components/UI/input"));
var separator_1 = __importDefault(require("components/UI/separator"));
var arrow_button_1 = __importDefault(require("components/UI/arrow-button"));
var loading_arrow_button_1 = __importDefault(require("components/UI/loading-arrow-button"));
var language_sources_1 = __importDefault(require("language-sources"));
var sign_in_menu_styles_1 = require("./sign-in-menu.styles");
var View = function (p) {
    return (<menu_1.default positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <sign_in_menu_styles_1.Container>
        <input_1.default title={language_sources_1.default.login.login} iconName='PersonFill' callback={p.handleLoginInput}/>
        <separator_1.default height={10}/>
        <input_1.default title={language_sources_1.default.login.password} iconName='LockFill' callback={p.handlePasswordInput} type='password'/>
        <separator_1.default height={20}/>
        {p.error && <react_bootstrap_1.Alert variant='danger'>{p.error}</react_bootstrap_1.Alert>}
        <sign_in_menu_styles_1.ArrowButtonContainer>
          {p.isLoading ? (<loading_arrow_button_1.default></loading_arrow_button_1.default>) : (<arrow_button_1.default onClick={p.handleLogin}>{language_sources_1.default.login.button}</arrow_button_1.default>)}
        </sign_in_menu_styles_1.ArrowButtonContainer>
      </sign_in_menu_styles_1.Container>
    </menu_1.default>);
};
exports.default = View;
