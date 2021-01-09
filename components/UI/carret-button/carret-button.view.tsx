import React from 'react';
import { CartPlus } from 'react-bootstrap-icons';

import { Container, PlusOne } from './carret-button.styles';

const View: React.FunctionComponent<{
  refs: { plusOne: React.RefObject<HTMLDivElement> };
  handleOnClickAnimation: VoidFunction;
  isActive: boolean;
}> = p => {
  return (
    <Container onClick={p.handleOnClickAnimation}>
      <CartPlus />
      {p.isActive && <PlusOne ref={p.refs.plusOne}>+1</PlusOne>}
    </Container>
  );
};

export default View;
