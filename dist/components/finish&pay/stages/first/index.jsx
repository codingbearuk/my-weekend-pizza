"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var language_sources_1 = __importDefault(require("language-sources"));
var separator_1 = __importDefault(require("components/UI/separator"));
var stages_styles_1 = require("../stages.styles");
var getPrice_1 = __importDefault(require("../getPrice"));
var getTotal_1 = __importDefault(require("../getTotal"));
var FirstStage = function (p) {
    var cart = react_redux_1.useSelector(function (s) { return s.cart; });
    return (<stages_styles_1.Container>
      <stages_styles_1.Content>
        <stages_styles_1.Title>
          <react_bootstrap_icons_1.CardChecklist />
          <separator_1.default width={25}/>
          {language_sources_1.default.finishAndPay.firstStepTitle}
        </stages_styles_1.Title>
        <separator_1.default height={20}/>
        <div>
          {cart.map(function (item) { return (<stages_styles_1.CartItem key={item._id}>
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
              <stages_styles_1.PriceContainer>
                <strong>Price: </strong>£{getPrice_1.default(item.price, item.size, item.amount).toFixed(2)}
              </stages_styles_1.PriceContainer>
            </stages_styles_1.CartItem>); })}
        </div>
      </stages_styles_1.Content>
      <stages_styles_1.TotalContainer>
        <stages_styles_1.Button onClick={function () {
        p.setNoStages(2);
        p.setStage(2);
    }}>
          {language_sources_1.default.finishAndPay.firstStepButton} <react_bootstrap_icons_1.ArrowRightCircleFill />
        </stages_styles_1.Button>
        <stages_styles_1.TotalPrice>Total: £{getTotal_1.default(cart).toFixed(2)}</stages_styles_1.TotalPrice>
      </stages_styles_1.TotalContainer>
    </stages_styles_1.Container>);
};
exports.default = FirstStage;
