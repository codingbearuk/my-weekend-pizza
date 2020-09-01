import React, { FunctionComponent } from "react";

import { Container } from "./menu.styles";

const View: FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  containerRef: React.RefObject<HTMLDivElement>;
}> = (p) => {
  return (
    <Container
      ref={p.containerRef}
      positionLeft={p.positionLeft}
      buttonWidth={p.buttonWidth}
    >
      {p.children}
    </Container>
  );
};

export default View;
