import React, { useState, useCallback } from "react";
import { XCircle, XCircleFill } from "react-bootstrap-icons";

import { Container } from "./close-button.styles";

const CloseButton: React.FunctionComponent<{ onClick: VoidFunction }> = (p) => {
  const [isHover, setHover] = useState<boolean>(false);

  const handeMouseEnter: VoidFunction = useCallback(() => setHover(true), []);
  const handeMouseLeave: VoidFunction = useCallback(() => setHover(false), []);

  return (
    <Container onMouseEnter={handeMouseEnter} onMouseLeave={handeMouseLeave}>
      {isHover ? <XCircleFill onClick={p.onClick} /> : <XCircle />}
    </Container>
  );
};

export default CloseButton;
