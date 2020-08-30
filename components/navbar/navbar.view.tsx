import React, { FunctionComponent } from "react";
import { FilterLeft } from "react-bootstrap-icons";
import language from "language-sources";

import { ViewComponent } from "./@navbar.t";
import { Container } from "./navbar.styles";
import Cart from "components/UI/cart";
import Separator from "components/UI/separator";
import Button from "components/UI/button";
import MainMenu from "components/main-menu";

const View: FunctionComponent<ViewComponent> = ({ handlers, state }) => {
  return (
    <Container isScrolled={false}>
      <FilterLeft size="40px" onClick={handlers.handleMainMenuButton} />
      <Separator width={20} />
      <Cart iconSize={20} numberSize={20} />
      <Separator width={20} />
      <Button text={language.navbar.signIn} onClick={() => {}} />
      <Separator width={20} />
      <Button text={language.navbar.signUp} onClick={() => {}} />
      {state.mainMenuState && <MainMenu />}
    </Container>
  );
};

export default View;
