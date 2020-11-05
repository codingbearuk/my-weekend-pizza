import React from 'react';
import { XCircleFill } from 'react-bootstrap-icons';

import { Container, Modal } from './change-address.styles';

interface ViewType {
  handlers: {
    handleCloseModal: VoidFunction;
  };
  refs: {
    container: React.RefObject<HTMLDivElement>;
    modal: React.RefObject<HTMLDivElement>;
  };
}

const View: React.FunctionComponent<ViewType> = p => {
  return (
    <Container ref={p.refs.container}>
      <Modal ref={p.refs.modal}>
        <nav>
          <XCircleFill onClick={p.handlers.handleCloseModal} />
        </nav>
      </Modal>
    </Container>
  );
};

export default View;
