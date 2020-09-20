import React from 'react';

import { Container, IngredientsContainer, Price } from './pizza.styles';
import { Pizza as PizzaType } from 'components/select-pizza/select-pizza.t';

const Pizza: React.FunctionComponent<PizzaType> = p => {
  return (
    <Container>
      <img src={`/images/pizzas/${p.image}`} alt={p.name} />
      <h2>{p.name}</h2>
      <IngredientsContainer>
        {p.ingredients.map((ingredient: string, index: number) => `${ingredient}, `)}
      </IngredientsContainer>
      <Price>£{p.price}</Price>
    </Container>
  );
};

export default Pizza;
