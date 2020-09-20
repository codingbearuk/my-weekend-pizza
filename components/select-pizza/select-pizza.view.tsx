import React from 'react';
import Title from 'components/UI/title';
import Separator from 'components/UI/separator';
import PizzaComponent from 'components/UI/pizza';

import { Container, PizzasContainer } from './select-pizza.styles';
import { Pizza } from './select-pizza.t';

const View: React.FunctionComponent<{ pizzas: Array<Pizza> }> = p => {
  return (
    <Container>
      <Title imageName='pizza-logo@2x.png'>Select your pizza</Title>
      <Separator height={30} />
      <PizzasContainer>
        {p.pizzas.map((pizza: Pizza) => (
          <PizzaComponent key={pizza._id} {...pizza} />
        ))}
      </PizzasContainer>
    </Container>
  );
};

export default View;
