import React from 'react';
import { PersonSquare } from 'react-bootstrap-icons';
import Separator from 'components/UI/separator';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

import { Container } from './user-button.styles';

const UserButton: React.FunctionComponent<{ email: string; onClick: () => void }> = p => {
  const device = useSelector((s: RootState) => s.device.resolution);
  return (
    <Container onClick={p.onClick}>
      <PersonSquare size={20} />
      {device === 'desktop' && (
        <>
          <Separator width={10} />
          <p>{p.email}</p>
        </>
      )}
    </Container>
  );
};

export default UserButton;
