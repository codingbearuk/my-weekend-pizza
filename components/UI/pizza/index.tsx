import React, { useState, useCallback, useRef } from 'react';
import CarretButton from 'components/UI/carret-button';
import { Form } from 'react-bootstrap';
import language from 'language-sources';

import { Container, IngredientsContainer, Price, DisplayOnHover } from './pizza.styles';
import { Pizza as PizzaType } from 'components/select-pizza/select-pizza.t';
import Separator from '../separator';

interface PizzaComponent {
  pizza: PizzaType;
  callback: (pizza: PizzaType, size: string) => void;
}

const Pizza: React.FunctionComponent<PizzaComponent> = p => {
  const [isHover, setHover] = useState<boolean>(false);

  const sizeRef: React.RefObject<HTMLSelectElement> = useRef();

  const handleHover = useCallback(() => setHover(!isHover), [isHover]);

  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleHover} isHover={isHover}>
      <img src={`/images/pizzas/${p.pizza.image}`} alt={p.pizza.name} />
      <h2>{p.pizza.name}</h2>
      <IngredientsContainer>
        {p.pizza.ingredients.map((ingredient: string, index: number) => `${ingredient}, `)}
      </IngredientsContainer>
      <Separator height={10} />
      <Price>£{p.pizza.price.toFixed(2)}</Price>
      {isHover ? (
        <DisplayOnHover>
          <Form.Control as='select' size='sm' ref={sizeRef}>
            <option>{language.selectPizza.small}</option>
            <option>{language.selectPizza.medium}</option>
            <option>{language.selectPizza.large}</option>
          </Form.Control>
          <Separator width={15} />
          <CarretButton onClick={() => p.callback(p.pizza, sizeRef.current.value)} />
        </DisplayOnHover>
      ) : (
        <Separator height={80} />
      )}
    </Container>
  );
};

export default Pizza;
