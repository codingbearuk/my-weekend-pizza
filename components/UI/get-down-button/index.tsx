import React from 'react';
import { Mouse, ArrowBarDown } from 'react-bootstrap-icons';

import { Container } from './get-down-button.styles';

const GetDownButton: React.FunctionComponent<{ onClick?: () => void }> = p => {
  return (
    <Container onClick={p.onClick}>
      <Mouse />
      <ArrowBarDown />
    </Container>
  );
};

export default GetDownButton;
