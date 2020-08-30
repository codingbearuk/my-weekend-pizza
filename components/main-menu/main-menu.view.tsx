import React, { FunctionComponent } from "react";

import { Container, MenuBox } from "./main-menu.styles";
import { View } from "./@main-menu.t";

const MainMenu: FunctionComponent<View> = ({ closeMenu }) => {
  return (
    <>
      <Container onClick={closeMenu}></Container>
      <MenuBox></MenuBox>
    </>
  );
};

export default MainMenu;
