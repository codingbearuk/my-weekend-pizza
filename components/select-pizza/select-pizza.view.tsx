import React from 'react';
import Title from 'components/UI/title';
import Separator from 'components/UI/separator';

import { Container, PizzasContainer } from './select-pizza.styles';

const View: React.FunctionComponent<{}> = p => {
  return (
    <Container>
      <Title imageName='pizza-logo@2x.png'>Select your pizza</Title>
      <Separator height={30} />
      <PizzasContainer></PizzasContainer>
    </Container>
  );
};

export default View;
