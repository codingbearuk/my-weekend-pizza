import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowRightCircleFill, CardChecklist } from 'react-bootstrap-icons';

import language from 'language-sources';
import { RootState } from 'redux/reducers';
import Separator from 'components/UI/separator';

import {
  Container,
  Content,
  Title,
  CartItem,
  TotalContainer,
  TotalPrice,
  Button,
  PriceContainer,
} from '../stages.styles';
import getPrice from '../getPrice';
import getTotal from '../getTotal';

interface FirstStageType {
  setStage: (stage: number) => void;
  setNoStages: React.Dispatch<React.SetStateAction<number>>;
}

const FirstStage: React.FunctionComponent<FirstStageType> = p => {
  const cart = useSelector((s: RootState) => s.cart);

  return (
    <Container>
      <Content>
        <Title>
          <CardChecklist />
          <Separator width={25} />
          {language.finishAndPay.firstStepTitle}
        </Title>
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
              <PriceContainer>
                <strong>Price: </strong>£{getPrice(item.price, item.size, item.amount).toFixed(2)}
              </PriceContainer>
            </CartItem>
          ))}
        </div>
      </Content>
      <TotalContainer>
        <Button
          onClick={() => {
            p.setNoStages(2);
            p.setStage(2);
          }}
        >
          {language.finishAndPay.firstStepButton} <ArrowRightCircleFill />
        </Button>
        <TotalPrice>Total: £{getTotal(cart).toFixed(2)}</TotalPrice>
      </TotalContainer>
    </Container>
  );
};

export default FirstStage;
