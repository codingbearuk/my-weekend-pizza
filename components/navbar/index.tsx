import React, {
  FunctionComponent,
  useCallback,
  useRef,
  RefObject,
} from "react";
import { useSelector, useDispatch } from "react-redux";

import View from "./navbar.view";
import { IndexComponent } from "./@navbar.t";
import { RootState } from "redux/reducers";
import { openMenu, closeMenu } from "redux/actions/menu.action";
import {
  signInMenuON,
  signUpMenuON,
  menuOFF,
} from "redux/actions/navigation.actions";

const Navbar: FunctionComponent<IndexComponent> = (p) => {
  const mainMenuState = useSelector((s: RootState) => s.mainMenu);
  const signInMenuState = useSelector(
    (s: RootState) => s.navigationMenues.signINMenu
  );

  const dispatch = useDispatch();

  const signInButton: RefObject<HTMLDivElement> = useRef(null);

  const handleMainMenuButton = useCallback(() => {
    dispatch(mainMenuState ? closeMenu() : openMenu());
  }, [mainMenuState]);

  const handleSignInMenuButton = useCallback(() => {
    dispatch(signInMenuState ? menuOFF() : signInMenuON());
  }, [signInMenuState]);

  return (
    <View
      handlers={{
        handleMainMenuButton,
        handleSignInMenuButton,
      }}
      state={{
        mainMenuState,
        signInMenuState,
      }}
      refs={{ signInButton }}
    />
  );
};

export default Navbar;
