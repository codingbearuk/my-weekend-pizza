"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var language_sources_1 = __importDefault(require("language-sources"));
var interactiv_input_1 = __importDefault(require("components/UI/interactiv-input"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var react_useanimations_1 = __importDefault(require("react-useanimations"));
var loading_1 = __importDefault(require("react-useanimations/lib/loading"));
var colors_1 = require("styled/colors");
var footer_styles_1 = require("./footer.styles");
var separator_1 = __importDefault(require("components/UI/separator"));
var View = function (p) {
    return (<footer_styles_1.Container id={p.id}>
      <footer_styles_1.Content>
        <h1>{language_sources_1.default.footer.title}</h1>
        <separator_1.default height={10}/>
        <footer_styles_1.InputsContainer>
          <section>
            <interactiv_input_1.default name='name' title={language_sources_1.default.footer.inputs.name} icon={react_bootstrap_icons_1.FilePersonFill} inputHandler={p.handleInputs}/>
            <separator_1.default height={10}/>
            <interactiv_input_1.default name='email' title={language_sources_1.default.footer.inputs.email} icon={react_bootstrap_icons_1.At} inputHandler={p.handleInputs}/>
            <separator_1.default height={10}/>
            <interactiv_input_1.default name='subject' title={language_sources_1.default.footer.inputs.subject} icon={react_bootstrap_icons_1.ChatDotsFill} inputHandler={p.handleInputs}/>
          </section>
          <footer_styles_1.Textarea name='message' placeholder={language_sources_1.default.footer.inputs.message} onChange={function (e) { return p.handleInputs(e.target.value, e.target.name); }} value={p.message}/>
        </footer_styles_1.InputsContainer>
        <separator_1.default height={20}/>
        <footer_styles_1.Button onClick={p.handleSubmitForm}>
          {p.isLoading ? (<>
              <react_useanimations_1.default animation={loading_1.default} strokeColor={colors_1.yellow}/>
              <p>{language_sources_1.default.footer.inputs.loading}</p>
            </>) : (<>
              <react_bootstrap_icons_1.EnvelopeFill />
              <p>{language_sources_1.default.footer.inputs.button}</p>
            </>)}
        </footer_styles_1.Button>
        {p.isSent && <footer_styles_1.SentMsg>{language_sources_1.default.footer.inputs.sent}</footer_styles_1.SentMsg>}
      </footer_styles_1.Content>
      <footer_styles_1.Footer>
        website created by <a href='https://coding-bear.co.uk/'>coding-bear.co.uk</a> || all rights reserved
      </footer_styles_1.Footer>
    </footer_styles_1.Container>);
};
exports.default = View;
