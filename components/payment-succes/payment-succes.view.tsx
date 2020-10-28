import React from 'react';
import { CartCheck, X } from 'react-bootstrap-icons';
import language from 'language-sources';

import { Container, ContentWindow, Button } from './payment-succes.styles';

interface ViewType {
  success: boolean;
  handleCloseButton: VoidFunction;
}

const View: React.FunctionComponent<ViewType> = p => {
  return (
    <Container>
      <ContentWindow success={p.success}>
        {p.success ? <CartCheck /> : <X />}
        <h1>{p.success ? language.finishAndPay.complete.title : language.finishAndPay.cancelWindow.title}</h1>
        <h2>
          {p.success ? language.finishAndPay.complete.content : language.finishAndPay.cancelWindow.content}
        </h2>
        <p>{p.success && language.finishAndPay.complete.info}</p>
        <Button success={p.success} onClick={p.handleCloseButton}>
          {language.finishAndPay.complete.button}
        </Button>
      </ContentWindow>
    </Container>
  );
};

export default View;
