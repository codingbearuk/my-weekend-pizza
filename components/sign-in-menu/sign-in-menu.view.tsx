import React, { FunctionComponent } from 'react';
import { Alert } from 'react-bootstrap';
import Menu from 'components/UI/menu';
import Input from 'components/UI/input';
import Separator from 'components/UI/separator';
import ArrowButton from 'components/UI/arrow-button';
import Loading from 'components/UI/loading-arrow-button';
import language from 'language-sources';

import { Container, ArrowButtonContainer } from './sign-in-menu.styles';

const View: FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  handleLoginInput: (value: string) => void;
  handlePasswordInput: (value: string) => void;
  handleLogin: () => void;
  isLoading: boolean;
  error: string;
}> = p => {
  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container>
        <Input title={language.login.login} iconName='PersonFill' callback={p.handleLoginInput} />
        <Separator height={10} />
        <Input
          title={language.login.password}
          iconName='LockFill'
          callback={p.handlePasswordInput}
          type='password'
        />
        <Separator height={20} />
        {p.error && <Alert variant='danger'>{p.error}</Alert>}
        <ArrowButtonContainer>
          {p.isLoading ? (
            <Loading></Loading>
          ) : (
            <ArrowButton onClick={p.handleLogin}>{language.login.button}</ArrowButton>
          )}
        </ArrowButtonContainer>
      </Container>
    </Menu>
  );
};

export default View;
