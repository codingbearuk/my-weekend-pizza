import React, { useCallback } from "react";
import CloseButton from "components/UI/close-button";
import Separator from "components/UI/separator";
import { ShieldFillExclamation } from "react-bootstrap-icons";

import { Container, Wrapper, TopBar, Content } from "./popup.styles";

const Popup: React.FunctionComponent<{
  title: string;
  msg: string;
  close: VoidFunction;
}> = (p) => {
  const switchOffScroll: VoidFunction = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container onScroll={switchOffScroll}>
      <Wrapper>
        <TopBar>
          <CloseButton onClick={p.close} />
          <p>
            <ShieldFillExclamation />
            <Separator width={5} />
            {p.title}
          </p>
          <div />
        </TopBar>
        <Content>{p.msg}</Content>
      </Wrapper>
    </Container>
  );
};

export default Popup;
