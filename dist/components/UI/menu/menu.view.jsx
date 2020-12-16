"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var navigation_actions_1 = require("redux/actions/navigation.actions");
var react_redux_1 = require("react-redux");
var menu_styles_1 = require("./menu.styles");
var View = function (p) {
    var dispatch = react_redux_1.useDispatch();
    return (<react_1.default.Fragment>
      <menu_styles_1.AroundContainer onClick={function () { return dispatch(navigation_actions_1.menuOFF()); }}/>
      <menu_styles_1.Container ref={p.containerRef} positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
        {p.children}
      </menu_styles_1.Container>
    </react_1.default.Fragment>);
};
exports.default = View;
