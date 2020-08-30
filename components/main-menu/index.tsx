import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/reducers";

import { closeMenu } from "redux/actions/menu.action";

import View from "./main-menu.view";

const MainMenu: FunctionComponent<{}> = ({}) => {
  const mainMenuState = useSelector((s: RootState) => s.mainMenu);

  const dispatch = useDispatch();

  const handleCloseMainMenu = (): void => {
    dispatch(closeMenu());
  };

  return <View closeMenu={handleCloseMainMenu} />;
};

export default MainMenu;
