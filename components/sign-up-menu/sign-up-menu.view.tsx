import React from "react";
import Menu from "components/UI/menu";

import { Container } from "./sign-up-menu.styles";

const View: React.FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
}> = (p) => {
  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container></Container>
    </Menu>
  );
};

export default View;
