import React from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Separator from "components/UI/separator";

import { Container } from "./arrow-button.styles";

const ArrowButton: React.FunctionComponent<{
  color?: string;
  onClick: VoidFunction;
}> = (p) => {
  return (
    <Container color={p.color} onClick={p.onClick}>
      {p.children}
      <Separator width={10} />
      <ArrowRightCircleFill />
    </Container>
  );
};

export default ArrowButton;
