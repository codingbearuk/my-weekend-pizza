import React, { FunctionComponent } from "react";

import { Container } from "./button.styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (p) => {
  return <Container>{p.text}</Container>;
};

export default Button;
