import React, { useState, useCallback } from 'react';
import CarretButton from 'components/UI/carret-button';
import { Form } from 'react-bootstrap';

import { Container, IngredientsContainer, Price, DisplayOnHover } from './pizza.styles';
import { Pizza as PizzaType } from 'components/select-pizza/select-pizza.t';
import Separator from '../separator';

interface PizzaComponent {
  pizza: PizzaType;
  callback: (pizza: PizzaType, size: string) => void;
}

const Pizza: React.FunctionComponent<PizzaComponent> = p => {
  const [isHover, setHover] = useState<boolean>(false);
  const [isClicked, setClicked] = useState<boolean>(false);
  const [size, setSize] = useState<string>('small');

  const handleHover = useCallback(() => {
    if (isClicked) setHover(true);
    else setHover(!isHover);
  }, [isHover]);
  const handleClick = useCallback(() => setClicked(!isClicked), [isClicked]);

  return (
    <Container onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} isHover={isHover}>
      <img src={`/images/pizzas/${p.pizza.image}`} alt={p.pizza.name} />
      <h2>{p.pizza.name}</h2>
      <IngredientsContainer>
        {p.pizza.ingredients.map((ingredient: string, index: number) => `${ingredient}, `)}
      </IngredientsContainer>
      <Separator height={10} />
      <Price>£{p.pizza.price}</Price>
      {isHover ? (
        <DisplayOnHover>
          <Form.Control as='select' size='sm' onChange={e => setSize(e.target.value)}>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </Form.Control>
          <Separator width={15} />
          <CarretButton onClick={() => p.callback(p.pizza, size)} />
        </DisplayOnHover>
      ) : (
        <Separator height={80} />
      )}
    </Container>
  );
};

export default Pizza;
