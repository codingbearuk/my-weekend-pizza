import React, { FunctionComponent, RefObject } from "react";

import { Container } from "./button.styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (p) => {
  return <Container onClick={p.onClick}>{p.text}</Container>;
};

export default Button;
