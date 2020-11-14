import React from 'react';
import language from 'language-sources';
import Input from 'components/UI/interactiv-input';
import { FilePersonFill } from 'react-bootstrap-icons';

import { Container, Content, InputsContainer } from './footer.styles';

interface ViewType {}

const View: React.FunctionComponent<ViewType> = p => {
  return (
    <Container>
      <Content>
        <h1>{language.footer.title}</h1>
        <InputsContainer>
          <Input title='name and surname' icon={FilePersonFill} />
        </InputsContainer>
      </Content>
    </Container>
  );
};

export default View;
