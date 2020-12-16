"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var language_sources_1 = __importDefault(require("language-sources"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var react_bootstrap_1 = require("react-bootstrap");
var cart_menu_styles_1 = require("./cart-menu.styles");
var cart_item_1 = __importDefault(require("./cart-item"));
var separator_1 = __importDefault(require("components/UI/separator"));
var View = function (p) {
    var containerRef = react_1.default.useRef();
    react_1.default.useEffect(function () {
        p.entryAnimation(containerRef.current);
    }, []);
    return (<cart_menu_styles_1.Container ref={containerRef}>
      {p.isModalActive && (<cart_menu_styles_1.ModalContainer>
          <react_bootstrap_1.Modal show={p.isModalActive} centered onHide={function () { return p.setModalActive(false); }}>
            <react_bootstrap_1.Modal.Header closeButton>
              <react_bootstrap_1.Modal.Title style={{ color: 'black' }}>{language_sources_1.default.cart.modal.title}</react_bootstrap_1.Modal.Title>
            </react_bootstrap_1.Modal.Header>
            <react_bootstrap_1.Modal.Body style={{ color: 'black' }}>{language_sources_1.default.cart.modal.msg}</react_bootstrap_1.Modal.Body>
          </react_bootstrap_1.Modal>
        </cart_menu_styles_1.ModalContainer>)}

      {p.isCartEmptyModal && (<cart_menu_styles_1.ModalContainer>
          <react_bootstrap_1.Modal show={p.isCartEmptyModal} centered onHide={function () { return p.setCartEmptyModal(false); }}>
            <react_bootstrap_1.Modal.Header closeButton>
              <react_bootstrap_1.Modal.Title style={{ color: 'black' }}>{language_sources_1.default.cart.modal.title2}</react_bootstrap_1.Modal.Title>
            </react_bootstrap_1.Modal.Header>
            <react_bootstrap_1.Modal.Body style={{ color: 'black' }}>{language_sources_1.default.cart.modal.msg2}</react_bootstrap_1.Modal.Body>
          </react_bootstrap_1.Modal>
        </cart_menu_styles_1.ModalContainer>)}

      <h1>{language_sources_1.default.cart.title}</h1>
      <cart_menu_styles_1.Content>
        <cart_menu_styles_1.CartContent>
          {p.cartContent.map(function (cartItem) { return (<cart_item_1.default key={cartItem._id} {...cartItem}/>); })}
        </cart_menu_styles_1.CartContent>
      </cart_menu_styles_1.Content>
      <cart_menu_styles_1.Footer>
        <div>Total: £{p.totalPrice.toFixed(2)}</div>
        <cart_menu_styles_1.PayButton onClick={p.handlePayButton}>
          {language_sources_1.default.cart.button}
          <separator_1.default width={10}/>
          <react_bootstrap_icons_1.ArrowRightCircleFill />
        </cart_menu_styles_1.PayButton>
      </cart_menu_styles_1.Footer>
    </cart_menu_styles_1.Container>);
};
exports.default = View;
