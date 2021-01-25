import React, { FunctionComponent, RefObject } from "react";
import * as Icon from 'react-bootstrap-icons'
import Separator from 'components/UI/separator'

import { Container } from "./button.styles";

interface ButtonProps {
  text: string;
  title? : string;
  icon?: string;
  mobile?: boolean;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = (p) => {
  let ButtonIcon;
  if (p.icon) ButtonIcon = Icon[p.icon];
  return <Container title={p.title} onClick={p.onClick}>{p.icon && <><ButtonIcon /><Separator width={5} /></>}{p.mobile ? null : p.text}</Container>;
};

export default Button;
