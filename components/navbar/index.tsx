import React, { FunctionComponent, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import View from "./navbar.view";
import { IndexComponent } from "./@navbar.t";
import { RootState } from "redux/reducers";
import { openMenu, closeMenu } from "redux/actions/menu.action";

const Navbar: FunctionComponent<IndexComponent> = ({}) => {
  const mainMenuState = useSelector((s: RootState) => s.mainMenu);

  const dispatch = useDispatch();

  const handleMainMenuButton = (): void => {
    dispatch(mainMenuState ? closeMenu() : openMenu());
  };

  return (
    <View
      handlers={{
        handleMainMenuButton,
      }}
      state={{
        mainMenuState,
      }}
    />
  );
};

export default Navbar;
