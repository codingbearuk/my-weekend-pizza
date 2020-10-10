import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

import language from 'language-sources';
import { RootState } from 'redux/reducers';
import Separator from 'components/UI/separator';

import { Container, Title, CartItem, TotalContainer, TotalPrice, Button } from '../stages.styles';
import getPrice from '../getPrice';
import getTotal from '../getTotal';

interface FirstStageType {
  setStage: (stage: number) => void;
}

const FirstStage: React.FunctionComponent<FirstStageType> = p => {
  const cart = useSelector((s: RootState) => s.cart);

  return (
    <Container>
      <Title>{language.finishAndPay.firstStepTitle}</Title>
      <Separator height={20} />
      <div>
        {cart.map(item => (
          <CartItem key={item._id}>
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
            <p>
              <strong>Price: </strong>£{getPrice(item.price, item.size, item.amount).toFixed(2)}
            </p>
          </CartItem>
        ))}
      </div>
      <TotalContainer>
        <TotalPrice>Total: £{getTotal(cart)}</TotalPrice>
        <Button onClick={() => p.setStage(2)}>
          {language.finishAndPay.firstStepButton} <ArrowRightCircleFill />
        </Button>
      </TotalContainer>
    </Container>
  );
};

export default FirstStage;
