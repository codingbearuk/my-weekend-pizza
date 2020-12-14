"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var menu_1 = __importDefault(require("components/UI/menu"));
var input_1 = __importDefault(require("components/UI/input"));
var arrow_button_1 = __importDefault(require("components/UI/arrow-button"));
var separator_1 = __importDefault(require("components/UI/separator"));
var language_sources_1 = __importDefault(require("language-sources"));
var loading_arrow_button_1 = __importDefault(require("components/UI/loading-arrow-button"));
var sign_up_menu_styles_1 = require("./sign-up-menu.styles");
var View = function (p) {
    var inputs = [
        {
            name: "email",
            title: language_sources_1.default.signUp.email,
            iconName: "PersonFill",
            type: "text",
        },
        {
            name: "password",
            title: language_sources_1.default.signUp.password,
            iconName: "LockFill",
            type: "password",
        },
        {
            name: "address",
            title: language_sources_1.default.signUp.address,
            iconName: "HouseDoorFill",
            type: "text",
        },
        {
            name: "city",
            title: language_sources_1.default.signUp.city,
            iconName: "SignpostFill",
            type: "text",
        },
        {
            name: "postcode",
            title: language_sources_1.default.signUp.postcode,
            iconName: "SignpostSplitFill",
            type: "text",
        },
        {
            name: "phone",
            title: language_sources_1.default.signUp.phone,
            iconName: "TelephoneFill",
            type: "text",
        },
    ];
    return (<menu_1.default positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <sign_up_menu_styles_1.Container>
        {inputs.map(function (input) { return (<react_1.default.Fragment key={input.title}>
            <input_1.default iconName={input.iconName} title={input.title} callback={p.handleInputs} type={input.type} name={input.name}/>
            {p.errors[input.name] && (<sign_up_menu_styles_1.ErrorBox>{language_sources_1.default.signUp.errors[input.name]}</sign_up_menu_styles_1.ErrorBox>)}
            <separator_1.default height={10}/>
          </react_1.default.Fragment>); })}
        <separator_1.default height={20}/>
        {p.errors.general && (<react_1.default.Fragment>
            <sign_up_menu_styles_1.ErrorBox>{p.errors.general}</sign_up_menu_styles_1.ErrorBox>
            <separator_1.default height={20}/>
          </react_1.default.Fragment>)}
        <sign_up_menu_styles_1.ButtonContainer>
          {p.isLoading ? (<loading_arrow_button_1.default />) : (<arrow_button_1.default onClick={p.handleCreateAccountButton}>
              {language_sources_1.default.signUp.button}
            </arrow_button_1.default>)}
        </sign_up_menu_styles_1.ButtonContainer>
      </sign_up_menu_styles_1.Container>
    </menu_1.default>);
};
exports.default = View;
