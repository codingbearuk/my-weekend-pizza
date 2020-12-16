"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var language_sources_1 = __importDefault(require("language-sources"));
var navbar_styles_1 = require("./navbar.styles");
var cart_1 = __importDefault(require("components/UI/cart"));
var separator_1 = __importDefault(require("components/UI/separator"));
var button_1 = __importDefault(require("components/UI/button"));
var main_menu_1 = __importDefault(require("components/main-menu"));
var sign_in_menu_1 = __importDefault(require("components/sign-in-menu"));
var sign_up_menu_1 = __importDefault(require("components/sign-up-menu"));
var user_button_1 = __importDefault(require("components/UI/user-button"));
var user_menu_1 = __importDefault(require("components/user-menu"));
var cart_menu_1 = __importDefault(require("components/cart-menu"));
var View = function (_a) {
    var handlers = _a.handlers, state = _a.state, refs = _a.refs;
    var device = react_redux_1.useSelector(function (s) { return s.device.resolution; });
    return (<react_1.default.Fragment>
      <navbar_styles_1.Container isScrolled={state.isPageScrolled}>
        <react_bootstrap_icons_1.FilterLeft size='40px' onClick={handlers.handleMainMenuButton}/>
        <separator_1.default width={20}/>
        <cart_1.default iconSize={20} numberSize={20}/>
        <separator_1.default width={20}/>
        {state.isUserLoggedState ? (<div ref={refs.userButton}>
            <user_button_1.default email={state.emailState} onClick={handlers.handleUserMenuButton}/>
          </div>) : (<>
            <div ref={refs.signInButton}>
              <button_1.default text={language_sources_1.default.navbar.signIn} onClick={handlers.handleSignInMenuButton}/>
            </div>
            <separator_1.default width={20}/>
            <div ref={refs.signUpButton}>
              <button_1.default text={language_sources_1.default.navbar.signUp} onClick={handlers.handleSignUpMenuButton}/>
            </div>
          </>)}
        {state.isPageScrolled && (<navbar_styles_1.PizzaLogoContainer>
            <img src='images/pizza-logo@2x.png' alt='pizza-logo'/>
            {device === 'desktop' && (<>
                <separator_1.default width={15}/>
                <p>My Weekend Pizza</p>
              </>)}
          </navbar_styles_1.PizzaLogoContainer>)}
      </navbar_styles_1.Container>
      {state.signInMenuState && <sign_in_menu_1.default buttonRef={refs.signInButton}/>}
      {state.signUpMenuState && <sign_up_menu_1.default buttonRef={refs.signUpButton}/>}
      {state.userMenuState && <user_menu_1.default buttonRef={refs.userButton}/>}
      {state.mainMenuState && <main_menu_1.default />}
      {state.cartMenuState && <cart_menu_1.default />}
    </react_1.default.Fragment>);
};
exports.default = View;
