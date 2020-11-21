import React from 'react';
import language from 'language-sources';
import Input from 'components/UI/interactiv-input';
import { FilePersonFill, At, ChatDotsFill, EnvelopeFill } from 'react-bootstrap-icons';
import Animation from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import { yellow } from 'styled/colors';

import { Container, Content, InputsContainer, Textarea, Button, SentMsg, Footer } from './footer.styles';
import Separator from 'components/UI/separator';

interface ViewType {
  id: string;
  handleInputs: (value: string, name: string) => void;
  handleSubmitForm: VoidFunction;
  message: string;
  isLoading: boolean;
  isSent: boolean;
}

const View: React.FunctionComponent<ViewType> = p => {
  return (
    <Container id={p.id}>
      <Content>
        <h1>{language.footer.title}</h1>
        <Separator height={10} />
        <InputsContainer>
          <section>
            <Input
              name='name'
              title={language.footer.inputs.name}
              icon={FilePersonFill}
              inputHandler={p.handleInputs}
            />
            <Separator height={10} />
            <Input
              name='email'
              title={language.footer.inputs.email}
              icon={At}
              inputHandler={p.handleInputs}
            />
            <Separator height={10} />
            <Input
              name='subject'
              title={language.footer.inputs.subject}
              icon={ChatDotsFill}
              inputHandler={p.handleInputs}
            />
          </section>
          <Textarea
            name='message'
            placeholder={language.footer.inputs.message}
            onChange={e => p.handleInputs(e.target.value, e.target.name)}
            value={p.message}
          />
        </InputsContainer>
        <Separator height={20} />
        <Button onClick={p.handleSubmitForm}>
          {p.isLoading ? (
            <>
              <Animation animation={loading} strokeColor={yellow} />
              <p>{language.footer.inputs.loading}</p>
            </>
          ) : (
            <>
              <EnvelopeFill />
              <p>{language.footer.inputs.button}</p>
            </>
          )}
        </Button>
        {p.isSent && <SentMsg>{language.footer.inputs.sent}</SentMsg>}
      </Content>
      <Footer>
        website created by <a href='https://coding-bear.co.uk/'>coding-bear.co.uk</a> || all rights reserved
      </Footer>
    </Container>
  );
};

export default View;
