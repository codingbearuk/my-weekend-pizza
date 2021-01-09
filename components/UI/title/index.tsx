import React from 'react';

import { Container } from './title.styles';

const Title: React.FunctionComponent<{ imageName: string }> = p => {
  return (
    <Container>
      <h1>{p.children}</h1>
      <img src={`/images/${p.imageName}`} alt={p.imageName} />
    </Container>
  );
};

export default Title;
