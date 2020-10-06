import React, { FunctionComponent, useCallback, useRef, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import View from './navbar.view';
import { IndexComponent } from './@navbar.t';
import { RootState } from 'redux/reducers';
import { openMenu, closeMenu } from 'redux/actions/menu.action';
import { signInMenuON, signUpMenuON, menuOFF, userMenuON } from 'redux/actions/navigation.actions';

const Navbar: FunctionComponent<IndexComponent> = p => {
  const mainMenuState: boolean = useSelector((s: RootState) => s.mainMenu);
  const signInMenuState: boolean = useSelector((s: RootState) => s.navigationMenues.signINMenu);
  const signUpMenuState: boolean = useSelector((s: RootState) => s.navigationMenues.signUPMenu);
  const userMenuState: boolean = useSelector((s: RootState) => s.navigationMenues.userMenu);
  const cartMenuState: boolean = useSelector((s: RootState) => s.navigationMenues.cart);
  const isUserLoggedState: boolean = useSelector((s: RootState) => s.user.isLogged);
  const emailState: string = useSelector((s: RootState) => s.user.email);
  const isPageScrolled: boolean = useSelector((s: RootState) => s.pageScroll);

  const dispatch = useDispatch();

  const signInButton: RefObject<HTMLDivElement> = useRef(null);
  const signUpButton: RefObject<HTMLDivElement> = useRef(null);
  const userButton: RefObject<HTMLDivElement> = useRef(null);

  const handleMainMenuButton = useCallback(() => {
    dispatch(mainMenuState ? closeMenu() : openMenu());
  }, [mainMenuState]);

  const handleSignInMenuButton = useCallback(() => {
    dispatch(signInMenuState ? menuOFF() : signInMenuON());
  }, [signInMenuState]);

  const handleSignUpMenuButton = useCallback(() => {
    dispatch(signUpMenuState ? menuOFF() : signUpMenuON());
  }, [signUpMenuState]);

  const handleUserMenuButton = useCallback(() => {
    dispatch(userMenuState ? menuOFF() : userMenuON());
  }, [userMenuState]);

  return (
    <View
      handlers={{
        handleMainMenuButton,
        handleSignInMenuButton,
        handleSignUpMenuButton,
        handleUserMenuButton,
      }}
      state={{
        mainMenuState,
        signInMenuState,
        signUpMenuState,
        isUserLoggedState,
        emailState,
        userMenuState,
        isPageScrolled,
        cartMenuState,
      }}
      refs={{ signInButton, signUpButton, userButton }}
    />
  );
};

export default Navbar;
