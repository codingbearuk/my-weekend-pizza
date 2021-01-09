"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var language_sources_1 = __importDefault(require("language-sources"));
var separator_1 = __importDefault(require("components/UI/separator"));
var stages_styles_1 = require("../stages.styles");
var View = function (p) {
    return (<stages_styles_1.Container>
      <stages_styles_1.Content>
        <stages_styles_1.Title>
          {language_sources_1.default.finishAndPay.thirdStepTitle}
          <separator_1.default width={25}/>
          <react_bootstrap_icons_1.CreditCardFill />
        </stages_styles_1.Title>
        <separator_1.default height={20}/>
        <stages_styles_1.PaymentContainer>
          {p.cartItems.map(function (item, index) { return (<stages_styles_1.CartItem key={index + index * 2}>
              <h3>{item.name}</h3>
              <p>
                {item.size ? (<>
                    <strong>pizza size: </strong>
                    {item.size}
                  </>) : (<>
                    <strong>amount: </strong>
                    {item.amount} items
                  </>)}
              </p>
              <p>£{item.price}</p>
            </stages_styles_1.CartItem>); })}
          <stages_styles_1.CartItem>
            <h3>{language_sources_1.default.finishAndPay.deliveryPrice}:</h3>
            <p>£{p.deliveryPrice}</p>
          </stages_styles_1.CartItem>
        </stages_styles_1.PaymentContainer>
      </stages_styles_1.Content>

      <stages_styles_1.TotalContainer>
        <stages_styles_1.TotalPrice>
          {language_sources_1.default.finishAndPay.totalPriceToPay}: £{p.fullPrice.toFixed(2)}
        </stages_styles_1.TotalPrice>
        <stages_styles_1.Button onClick={p.handlers.handleNextButton}>
          {language_sources_1.default.finishAndPay.thirdStepButton} <react_bootstrap_icons_1.CreditCardFill />
        </stages_styles_1.Button>
      </stages_styles_1.TotalContainer>
    </stages_styles_1.Container>);
};
exports.default = View;
