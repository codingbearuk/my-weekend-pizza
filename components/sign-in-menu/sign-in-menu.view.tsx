import React, { FunctionComponent } from "react";
import Menu from "components/UI/menu";
import Input from "components/UI/input";
import Separator from "components/UI/separator";

import { Container } from "./sign-in-menu.styles";

const View: FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  handleLoginInput: (value: string) => void;
  handlePasswordInput: (value: string) => void;
}> = (p) => {
  return (
    <Menu positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <Container>
        <Input
          title="login"
          iconName="PersonFill"
          callback={p.handleLoginInput}
        />
        <Separator height={10} />
        <Input
          title="password"
          iconName="LockFill"
          callback={p.handleLoginInput}
          type="password"
        />
      </Container>
    </Menu>
  );
};

export default View;
