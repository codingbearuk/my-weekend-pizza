import React, { useRef, useEffect } from 'react';
import { XCircle } from 'react-bootstrap-icons';

import StageDots from 'components/UI/stage-dots';

import { Container, Window, TopBar, Content } from './finish&pay.styles';
import FirstStage from './stages/first';

interface ViewType {
  handlers: {
    handleCloseModal: (
      containerRef: React.RefObject<HTMLDivElement>,
      windowRef: React.RefObject<HTMLDivElement>
    ) => void;
    enterAnimation: (
      containerEl: React.RefObject<HTMLDivElement>,
      windowEl: React.RefObject<HTMLDivElement>
    ) => void;
    setStage: any;
  };
  stage: number;
}

const View: React.FunctionComponent<ViewType> = p => {
  const containerRef = useRef();
  const windowRef = useRef();

  const getStage = (): JSX.Element => {
    if (p.stage === 1) return <FirstStage setStage={p.handlers.setStage} />;
  };

  useEffect(() => {
    p.handlers.enterAnimation(containerRef.current, windowRef.current);
  }, []);

  return (
    <Container ref={containerRef}>
      <Window ref={windowRef}>
        <TopBar>
          <XCircle onClick={() => p.handlers.handleCloseModal(containerRef.current, windowRef.current)} />
        </TopBar>
        <Content>{getStage()}</Content>
        <StageDots numberOfStages={3} activeStage={p.stage} setStage={p.handlers.setStage} />
      </Window>
    </Container>
  );
};

export default View;
