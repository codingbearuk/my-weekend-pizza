import React, { FunctionComponent } from "react";
import { FilterLeft } from "react-bootstrap-icons";

import { ViewComponent } from "./@navbar.t";
import { Container } from "./navbar.styles";
import Cart from "components/UI/cart";
import Separator from "components/UI/separator";

const View: FunctionComponent<ViewComponent> = ({}) => {
  return (
    <Container isScrolled={false}>
      <FilterLeft size="40px" />
      <Separator width={10} />
      <Cart iconSize={20} numberSize={20} />
    </Container>
  );
};

export default View;
