import React, { useRef, useEffect } from 'react';
import { XCircle } from 'react-bootstrap-icons';

import { Container, Window, TopBar, Content } from './finish&pay.styles';

interface ViewType {
  handlers: {
    handleCloseModal: VoidFunction;
    enterAnimation: (
      containerEl: React.RefObject<HTMLDivElement>,
      windowEl: React.RefObject<HTMLDivElement>
    ) => void;
  };
}

const View: React.FunctionComponent<ViewType> = p => {
  const containerRef = useRef();
  const windowRef = useRef();

  useEffect(() => {
    p.handlers.enterAnimation(containerRef.current, windowRef.current);
  }, []);

  return (
    <Container ref={containerRef}>
      <Window ref={windowRef}>
        <TopBar>
          <XCircle onClick={() => p.handlers.handleCloseModal(containerRef.current, windowRef.current)} />
        </TopBar>
        <Content></Content>
      </Window>
    </Container>
  );
};

export default View;
