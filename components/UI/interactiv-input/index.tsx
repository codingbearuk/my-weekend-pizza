import React, { ComponentType, useState } from 'react';

import { Container, Icon, Input } from './interactiv-input.styles';

interface InteractivInputType {
  icon: ComponentType;
  title: string;
  name: string;
  inputHandler: (value: string, name: string) => void;
}

const InteractivInput: React.FunctionComponent<InteractivInputType> = P => {
  const [isActive, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleInput = (value: string, name: string) => {
    setValue(value);
    P.inputHandler(value, name);
  };

  return (
    <Container isActive={isActive}>
      <Icon isActive={isActive}>
        <P.icon />
      </Icon>
      <Input
        name={P.name}
        placeholder={P.title}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        value={value}
        onChange={e => handleInput(e.target.value, e.target.name)}
      />
    </Container>
  );
};

export default InteractivInput;
