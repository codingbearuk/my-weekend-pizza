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
var getTotal_1 = __importDefault(require("../getTotal"));
var react_datepicker_1 = __importDefault(require("react-datepicker"));
var date_fns_1 = require("date-fns");
var stages_styles_1 = require("../stages.styles");
var View = function (p) {
    var user = react_redux_1.useSelector(function (s) { return s.user; });
    var finnishAndPayState = react_redux_1.useSelector(function (s) { return s.finishAndPay; });
    var cart = react_redux_1.useSelector(function (s) { return s.cart; });
    return (<stages_styles_1.Container>
      <stages_styles_1.Content>
        <stages_styles_1.Title>
          <react_bootstrap_icons_1.Truck />
          <separator_1.default width={25}/>
          {language_sources_1.default.finishAndPay.secondStepTitle}
        </stages_styles_1.Title>
        <stages_styles_1.CartItem>
          <h3>{language_sources_1.default.finishAndPay.deliveryAddress}</h3>
          <react_1.default.Fragment>
            <p>{user.adress}</p>
            <p>
              {user.city} {user.postcode}
            </p>
          </react_1.default.Fragment>
        </stages_styles_1.CartItem>
        <stages_styles_1.PriceContainer>
          <strong>
            + £{finnishAndPayState.deliveryPrice} {language_sources_1.default.finishAndPay.plusDelivery}
          </strong>
        </stages_styles_1.PriceContainer>
        <stages_styles_1.DateContainer title={language_sources_1.default.finishAndPay.deliveryTime}>
          <react_bootstrap_icons_1.CalendarWeekFill />
          <separator_1.default width={20}/>
          <react_datepicker_1.default startDate={p.state.deliveryDate} selected={p.state.deliveryDate} onChange={p.handlers.handleSetDate} showTimeSelect timeIntervals={30} minDate={p.handlers.handleSetStartAndEndDate().start} maxDate={p.handlers.handleSetStartAndEndDate().end} minTime={date_fns_1.setHours(date_fns_1.setMinutes(new Date(), 0), 12)} maxTime={date_fns_1.setHours(date_fns_1.setMinutes(new Date(), 0), 23)} dateFormat='dd.MM.yyyy h:mm aa' title={language_sources_1.default.finishAndPay.deliveryTime}/>
        </stages_styles_1.DateContainer>
      </stages_styles_1.Content>
      <stages_styles_1.TotalContainer>
        <stages_styles_1.Button onClick={p.handlers.handleNextButton}>
          {language_sources_1.default.finishAndPay.secondStepButton} <react_bootstrap_icons_1.CreditCardFill />
        </stages_styles_1.Button>
        <stages_styles_1.TotalPrice>Total: £{(getTotal_1.default(cart) + finnishAndPayState.deliveryPrice).toFixed(2)}</stages_styles_1.TotalPrice>
      </stages_styles_1.TotalContainer>
    </stages_styles_1.Container>);
};
exports.default = View;
