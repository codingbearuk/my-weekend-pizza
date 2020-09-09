import React from 'react';
import { PersonSquare } from 'react-bootstrap-icons';
import Separator from 'components/UI/separator';

import { Container } from './user-button.styles';

const UserButton: React.FunctionComponent<{ email: string; onClick: () => void }> = p => {
  return (
    <Container onClick={p.onClick}>
      <PersonSquare size={20} />
      <Separator width={10} />
      <p>{p.email}</p>
    </Container>
  );
};

export default UserButton;
