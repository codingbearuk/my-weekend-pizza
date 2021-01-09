"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var title_1 = __importDefault(require("components/UI/title"));
var language_sources_1 = __importDefault(require("language-sources"));
var sauce_1 = __importDefault(require("components/UI/sauce"));
var separator_1 = __importDefault(require("components/UI/separator"));
var select_sauce_styles_1 = require("./select-sauce.styles");
var View = function (p) {
    return (<select_sauce_styles_1.Container id={p.id}>
      <title_1.default imageName='sauce-red@2x.png'>{language_sources_1.default.selectSauce.title}</title_1.default>
      <separator_1.default height={20}/>
      <select_sauce_styles_1.SaucesContainer>
        {p.sauces.map(function (sauce) { return (<sauce_1.default key={sauce._id} sauce={sauce} callback={p.handleAddSauceToCart}/>); })}
      </select_sauce_styles_1.SaucesContainer>
      <separator_1.default height={20}/>
    </select_sauce_styles_1.Container>);
};
exports.default = View;
