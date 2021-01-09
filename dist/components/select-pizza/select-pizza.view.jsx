"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var title_1 = __importDefault(require("components/UI/title"));
var separator_1 = __importDefault(require("components/UI/separator"));
var pizza_1 = __importDefault(require("components/UI/pizza"));
var language_sources_1 = __importDefault(require("language-sources"));
var select_pizza_styles_1 = require("./select-pizza.styles");
var View = function (p) {
    return (<select_pizza_styles_1.Container id={p.id}>
      <title_1.default imageName='pizza-logo@2x.png'>{language_sources_1.default.selectPizza.title}</title_1.default>
      <separator_1.default height={30}/>
      <select_pizza_styles_1.PizzasContainer>
        {p.pizzas.map(function (pizza) { return (<pizza_1.default key={pizza._id} pizza={pizza} callback={p.handleAddPizzaToCart}/>); })}
      </select_pizza_styles_1.PizzasContainer>
    </select_pizza_styles_1.Container>);
};
exports.default = View;
