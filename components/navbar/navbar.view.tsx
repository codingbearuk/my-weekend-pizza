import React, { FunctionComponent } from 'react';
import { FilterLeft } from 'react-bootstrap-icons';
import language from 'language-sources';

import { ViewComponent } from './@navbar.t';
import { Container } from './navbar.styles';
import Cart from 'components/UI/cart';
import Separator from 'components/UI/separator';
import Button from 'components/UI/button';
import MainMenu from 'components/main-menu';
import SignInMenu from 'components/sign-in-menu';
import SignUpMenu from 'components/sign-up-menu';
import UserButton from 'components/UI/user-button';

const View: FunctionComponent<ViewComponent> = ({ handlers, state, refs }) => {
  return (
    <Container isScrolled={false}>
      <FilterLeft size='40px' onClick={handlers.handleMainMenuButton} />
      <Separator width={20} />
      <Cart iconSize={20} numberSize={20} />
      <Separator width={20} />
      {state.isUserLoggedState ? (
        <UserButton email={state.emailState} onClick={handlers.handleUserMenuButton} />
      ) : (
        <>
          <div ref={refs.signInButton}>
            <Button text={language.navbar.signIn} onClick={handlers.handleSignInMenuButton} />
          </div>
          <Separator width={20} />
          <div ref={refs.signUpButton}>
            <Button text={language.navbar.signUp} onClick={handlers.handleSignUpMenuButton} />
          </div>
        </>
      )}
      {state.mainMenuState && <MainMenu />}
      {state.signInMenuState && <SignInMenu buttonRef={refs.signInButton} />}
      {state.signUpMenuState && <SignUpMenu buttonRef={refs.signUpButton} />}
    </Container>
  );
};

export default View;
