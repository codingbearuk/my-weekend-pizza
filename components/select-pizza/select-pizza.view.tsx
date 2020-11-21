import React from 'react';
import Title from 'components/UI/title';
import Separator from 'components/UI/separator';
import PizzaComponent from 'components/UI/pizza';
import language from 'language-sources';

import { Container, PizzasContainer } from './select-pizza.styles';
import { Pizza } from './select-pizza.t';

const View: React.FunctionComponent<{
  id: string;
  pizzas: Array<Pizza>;
  handleAddPizzaToCart: (pizza: Pizza, size: string) => void;
}> = p => {
  return (
    <Container id={p.id}>
      <Title imageName='pizza-logo@2x.png'>{language.selectPizza.title}</Title>
      <Separator height={30} />
      <PizzasContainer>
        {p.pizzas.map((pizza: Pizza) => (
          <PizzaComponent key={pizza._id} pizza={pizza} callback={p.handleAddPizzaToCart} />
        ))}
      </PizzasContainer>
    </Container>
  );
};

export default View;
