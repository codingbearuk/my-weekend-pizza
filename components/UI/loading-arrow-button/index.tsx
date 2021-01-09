import React from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import UseAnimation from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import Separator from "components/UI/separator";
import { white } from "styled/colors";

import { Container } from "./loading-arrow-button.styles";

const ArrowButtonLoading: React.FunctionComponent<{
  color?: string;
}> = (p) => {
  return (
    <Container color={p.color}>
      Loading
      <Separator width={10} />
      <UseAnimation animation={loading} />
    </Container>
  );
};

export default ArrowButtonLoading;
