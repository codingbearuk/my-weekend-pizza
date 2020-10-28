import React from 'react';
import { CreditCardFill } from 'react-bootstrap-icons';
import language from 'language-sources';
import Separator from 'components/UI/separator';

import {
  Container,
  Content,
  Title,
  TotalContainer,
  TotalPrice,
  Button,
  PaymentContainer,
  CartItem,
} from '../stages.styles';

interface ViewType {
  handlers: {
    handleNextButton: VoidFunction;
  };
  fullPrice: number;
  deliveryPrice: number;
  cartItems: Array<{ name: string; price: number; size?: string; amount?: number }>;
}

const View: React.FunctionComponent<ViewType> = p => {
  return (
    <Container>
      <Content>
        <Title>
          {language.finishAndPay.thirdStepTitle}
          <Separator width={25} />
          <CreditCardFill />
        </Title>
        <Separator height={20} />
        <PaymentContainer>
          {p.cartItems.map((item, index) => (
            <CartItem key={index + index * 2}>
              <h3>{item.name}</h3>
              <p>
                {item.size ? (
                  <>
                    <strong>pizza size: </strong>
                    {item.size}
                  </>
                ) : (
                  <>
                    <strong>amount: </strong>
                    {item.amount} items
                  </>
                )}
              </p>
              <p>£{item.price}</p>
            </CartItem>
          ))}
          <CartItem>
            <h3>{language.finishAndPay.deliveryPrice}:</h3>
            <p>£{p.deliveryPrice}</p>
          </CartItem>
        </PaymentContainer>
      </Content>

      <TotalContainer>
        <TotalPrice>
          {language.finishAndPay.totalPriceToPay}: £{p.fullPrice.toFixed(2)}
        </TotalPrice>
        <Button onClick={p.handlers.handleNextButton}>
          {language.finishAndPay.thirdStepButton} <CreditCardFill />
        </Button>
      </TotalContainer>
    </Container>
  );
};

export default View;
