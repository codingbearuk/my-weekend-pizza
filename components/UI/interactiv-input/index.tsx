import React, { ComponentType, useState } from 'react';

import { Container, Icon, Input } from './interactiv-input.styles';

interface InteractivInputType {
  icon: ComponentType;
  title: string;
}

const InteractivInput: React.FunctionComponent<InteractivInputType> = P => {
  const [isActive, setActive] = useState<boolean>(false);
  return (
    <Container isActive={isActive}>
      <Icon isActive={isActive}>
        <P.icon />
      </Icon>
      <Input placeholder={P.title} onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
    </Container>
  );
};

export default InteractivInput;
