import React from 'react';
import language from 'language-sources';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';

import { Container, Content, CartContent, Footer, PayButton, ModalContainer } from './cart-menu.styles';
import { CartItem as CartItemType } from 'redux/actions/cart.action';
import CartItem from './cart-item';
import Separator from 'components/UI/separator';

const View: React.FunctionComponent<{
  cartContent: Array<CartItemType>;
  totalPrice: number;
  handlePayButton: VoidFunction;
  isModalActive: boolean;
  setModalActive: any;
  isCartEmptyModal: boolean;
  setCartEmptyModal: any;
}> = p => {
  return (
    <Container>
      {p.isModalActive && (
        <ModalContainer>
          <Modal show={p.isModalActive} centered onHide={() => p.setModalActive(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: 'black' }}>{language.cart.modal.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: 'black' }}>{language.cart.modal.msg}</Modal.Body>
          </Modal>
        </ModalContainer>
      )}

      {p.isCartEmptyModal && (
        <ModalContainer>
          <Modal show={p.isCartEmptyModal} centered onHide={() => p.setCartEmptyModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: 'black' }}>{language.cart.modal.title2}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: 'black' }}>{language.cart.modal.msg2}</Modal.Body>
          </Modal>
        </ModalContainer>
      )}

      <h1>{language.cart.title}</h1>
      <Content>
        <CartContent>
          {p.cartContent.map(cartItem => (
            <CartItem key={cartItem._id} {...cartItem} />
          ))}
        </CartContent>
      </Content>
      <Footer>
        <div>Total: £{p.totalPrice.toFixed(2)}</div>
        <PayButton onClick={p.handlePayButton}>
          {language.cart.button}
          <Separator width={10} />
          <ArrowRightCircleFill />
        </PayButton>
      </Footer>
    </Container>
  );
};

export default View;
