import React from 'react';
import * as BSIcon from 'react-bootstrap-icons';
import { XCircleFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import Separator from 'components/UI/separator';

import { Container, Modal, InputContainer, UpdateButton } from './change-address.styles';
import language from 'language-sources';

interface ViewType {
  state: {
    isLoading: boolean;
    isUpdated: boolean;
  };
  handlers: {
    handleCloseModal: VoidFunction;
    handleSetMyAddress: (name: string, value: string) => void;
    handleUpdateButton: any;
  };
  refs: {
    container: React.RefObject<HTMLDivElement>;
    modal: React.RefObject<HTMLDivElement>;
  };
  inputs: Array<{ name: string; value: string; title: string; icon: string }>;
}

const View: React.FunctionComponent<ViewType> = p => {
  const device = useSelector((s: RootState) => s.device.resolution);
  return (
    <Container ref={p.refs.container}>
      <Modal ref={p.refs.modal}>
        <nav>
          <XCircleFill onClick={p.handlers.handleCloseModal} />
        </nav>
        <section>
          <h1>{language.changeAddressModal.title}</h1>
          <Separator height={30} />
          {p.inputs.map((input, index) => {
            const Icon = BSIcon[input.icon];
            return (
              <InputContainer key={name + index} device={device}>
                <div>
                  <Icon />
                  {device === 'desktop' && input.title}
                </div>
                <input
                  title={input.title}
                  name={input.name}
                  value={input.value}
                  onChange={e => p.handlers.handleSetMyAddress(e.target.name, e.target.value)}
                />
              </InputContainer>
            );
          })}
        </section>
        <UpdateButton
          isLoading={p.state.isLoading}
          isUpdated={p.state.isUpdated}
          onClick={!p.state.isLoading && p.handlers.handleUpdateButton}
        >
          {p.state.isLoading
            ? language.changeAddressModal.loading
            : p.state.isUpdated
            ? language.changeAddressModal.updated
            : language.changeAddressModal.button}
        </UpdateButton>
      </Modal>
    </Container>
  );
};

export default View;
