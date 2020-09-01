import React from "react";
import * as BSIcon from "react-bootstrap-icons";

import { Container, IconContainer, InputElement } from "./input.styles";

const View: React.FunctionComponent<{
  iconName: string;
  title: string;
  handleValueState: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (p) => {
  const Icon = BSIcon[p.iconName];
  return (
    <Container title={p.title}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <InputElement onChange={p.handleValueState} placeholder={p.title} />
    </Container>
  );
};

export default View;
