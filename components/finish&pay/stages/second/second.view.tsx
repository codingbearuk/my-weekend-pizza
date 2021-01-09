import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { Truck, CreditCardFill, CalendarWeekFill } from 'react-bootstrap-icons';
import language from 'language-sources';
import Separator from 'components/UI/separator';
import getTotal from '../getTotal';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';

import {
  Container,
  Content,
  Title,
  CartItem,
  Button,
  PriceContainer,
  TotalContainer,
  TotalPrice,
  DateContainer,
} from '../stages.styles';

interface ViewType {
  handlers: {
    handleNextButton: VoidFunction;
    handleSetDate: (date: Date) => void;
    handleSetStartAndEndDate: () => { start: Date; end: Date };
  };
  state: {
    deliveryDate: Date;
  };
}

const View: React.FunctionComponent<ViewType> = p => {
  const user = useSelector((s: RootState) => s.user);
  const finnishAndPayState = useSelector((s: RootState) => s.finishAndPay);
  const cart = useSelector((s: RootState) => s.cart);

  return (
    <Container>
      <Content>
        <Title>
          <Truck />
          <Separator width={25} />
          {language.finishAndPay.secondStepTitle}
        </Title>
        <CartItem>
          <h3>{language.finishAndPay.deliveryAddress}</h3>
          <React.Fragment>
            <p>{user.adress}</p>
            <p>
              {user.city} {user.postcode}
            </p>
          </React.Fragment>
        </CartItem>
        <PriceContainer>
          <strong>
            + £{finnishAndPayState.deliveryPrice} {language.finishAndPay.plusDelivery}
          </strong>
        </PriceContainer>
        <DateContainer title={language.finishAndPay.deliveryTime}>
          <CalendarWeekFill />
          <Separator width={20} />
          <DatePicker
            startDate={p.state.deliveryDate}
            selected={p.state.deliveryDate}
            onChange={p.handlers.handleSetDate}
            showTimeSelect
            timeIntervals={30}
            minDate={p.handlers.handleSetStartAndEndDate().start}
            maxDate={p.handlers.handleSetStartAndEndDate().end}
            minTime={setHours(setMinutes(new Date(), 0), 12)}
            maxTime={setHours(setMinutes(new Date(), 0), 23)}
            dateFormat='dd.MM.yyyy h:mm aa'
            title={language.finishAndPay.deliveryTime}
          />
        </DateContainer>
      </Content>
      <TotalContainer>
        <Button onClick={p.handlers.handleNextButton}>
          {language.finishAndPay.secondStepButton} <CreditCardFill />
        </Button>
        <TotalPrice>Total: £{(getTotal(cart) + finnishAndPayState.deliveryPrice).toFixed(2)}</TotalPrice>
      </TotalContainer>
    </Container>
  );
};

export default View;
