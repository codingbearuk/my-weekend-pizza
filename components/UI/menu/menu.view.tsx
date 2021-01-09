import React, { FunctionComponent } from "react";
import { menuOFF } from "redux/actions/navigation.actions";
import { useDispatch } from "react-redux";

import { Container, AroundContainer } from "./menu.styles";

const View: FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
  containerRef: React.RefObject<HTMLDivElement>;
}> = (p) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <AroundContainer onClick={() => dispatch(menuOFF())} />
      <Container
        ref={p.containerRef}
        positionLeft={p.positionLeft}
        buttonWidth={p.buttonWidth}
      >
        {p.children}
      </Container>
    </React.Fragment>
  );
};

export default View;
