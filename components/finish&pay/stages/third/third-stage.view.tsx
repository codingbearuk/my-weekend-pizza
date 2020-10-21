import React from 'react';
import { CreditCardFill } from 'react-bootstrap-icons';
import language from 'language-sources';
import Separator from 'components/UI/separator';
import Input from 'components/UI/input';

import {
  Container,
  Title,
  TotalContainer,
  Button,
  PaymentContainer,
  LoadingContainer,
} from '../stages.styles';

interface ViewType {
  handlers: {
    handleNextButton: VoidFunction;
    handleInputs: (value: string, inputName: string) => void;
  };
  fullPrice: number;
  isLoading: boolean;
}

const View: React.FunctionComponent<ViewType> = p => {
  if (p.isLoading) return <LoadingContainer>{language.finishAndPay.loading}</LoadingContainer>;
  else
    return (
      <Container>
        <Title>
          {language.finishAndPay.thirdStepTitle}
          <Separator width={25} />
          <CreditCardFill />
        </Title>
        <Separator height={20} />
        <PaymentContainer>
          <h2>
            {language.finishAndPay.thirdStepSubTitle} £{p.fullPrice.toFixed(2)}
          </h2>
          <Separator height={50} />
          <section>
            <Input
              iconName='FilePersonFill'
              title={language.finishAndPay.inputs.nameOnCard}
              name='name'
              callback={p.handlers.handleInputs}
            />
            <Separator height={10} />
            <Input
              iconName='CreditCardFill'
              title={language.finishAndPay.inputs.cardNo}
              name='number'
              callback={p.handlers.handleInputs}
            />
            <Separator height={10} />
            <section>
              <Input
                iconName='CalendarDateFill'
                title={language.finishAndPay.inputs.express}
                name='express'
                callback={p.handlers.handleInputs}
              />
              <div />
              <Input
                iconName='CreditCard2FrontFill'
                title={language.finishAndPay.inputs.cvv}
                name='cvv'
                callback={p.handlers.handleInputs}
              />
            </section>
          </section>
        </PaymentContainer>

        <TotalContainer>
          <div />
          <Button onClick={p.handlers.handleNextButton}>
            {language.finishAndPay.thirdStepButton} <CreditCardFill />
          </Button>
        </TotalContainer>
      </Container>
    );
};

export default View;
