import React, { FunctionComponent } from "react";

import { Container, Logo } from "./welcome-screen.styles";
import { ViewProps } from "./@welcome-screen.t";

const View: FunctionComponent<ViewProps> = ({}) => {
  return (
    <Container>
      <Logo src="/images/logo-big.png" alt="logo" />
    </Container>
  );
};

export default View;
