import React, { FunctionComponent, useCallback, useRef, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import View from './navbar.view';
import { IndexComponent } from './@navbar.t';
import { RootState } from 'redux/reducers';
import { openMenu, closeMenu } from 'redux/actions/menu.action';
import { signInMenuON, signUpMenuON, menuOFF } from 'redux/actions/navigation.actions';

const Navbar: FunctionComponent<IndexComponent> = p => {
  const mainMenuState: boolean = useSelector((s: RootState) => s.mainMenu);
  const signInMenuState: boolean = useSelector((s: RootState) => s.navigationMenues.signINMenu);
  const signUpMenuState: boolean = useSelector((s: RootState) => s.navigationMenues.signUPMenu);
  const isUserLoggedState: boolean = useSelector((s: RootState) => s.user.isLogged);
  const emailState: string = useSelector((s: RootState) => s.user.email);

  const dispatch = useDispatch();

  const signInButton: RefObject<HTMLDivElement> = useRef(null);
  const signUpButton: RefObject<HTMLDivElement> = useRef(null);

  const handleMainMenuButton = useCallback(() => {
    dispatch(mainMenuState ? closeMenu() : openMenu());
  }, [mainMenuState]);

  const handleSignInMenuButton = useCallback(() => {
    dispatch(signInMenuState ? menuOFF() : signInMenuON());
  }, [signInMenuState]);

  const handleSignUpMenuButton = useCallback(() => {
    dispatch(signUpMenuState ? menuOFF() : signUpMenuON());
  }, [signUpMenuState]);

  return (
    <View
      handlers={{
        handleMainMenuButton,
        handleSignInMenuButton,
        handleSignUpMenuButton,
      }}
      state={{
        mainMenuState,
        signInMenuState,
        signUpMenuState,
        isUserLoggedState,
        emailState,
      }}
      refs={{ signInButton, signUpButton }}
    />
  );
};

export default Navbar;
