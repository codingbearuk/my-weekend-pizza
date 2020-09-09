import React from 'react';
import Menu from 'components/UI/menu';

import { Container } from './user-menu.styles';
import Button from './button';

const View: React.FunctionComponent<{ positionLeft: number; buttonWidth: number }> = p => {
  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container width={p.buttonWidth}>
        <Button>option</Button>
        <Button>option</Button>
        <Button>logout</Button>
      </Container>
    </Menu>
  );
};

export default View;
