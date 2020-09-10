import React, { FunctionComponent } from 'react';
import GetDownButton from 'components/UI/get-down-button';

import { Container, Logo, ButtonContainer } from './welcome-screen.styles';
import { ViewProps } from './@welcome-screen.t';

const View: FunctionComponent<ViewProps> = ({}) => {
  return (
    <Container>
      <Logo src='/images/logo-big.png' alt='logo' />
      <ButtonContainer>
        <GetDownButton />
      </ButtonContainer>
    </Container>
  );
};

export default View;
