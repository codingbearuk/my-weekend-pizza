import React, { useRef, useEffect } from 'react';
import { XCircle } from 'react-bootstrap-icons';

import StageDots from 'components/UI/stage-dots';

import { Container, Window, TopBar, Content } from './finish&pay.styles';
import FirstStage from './stages/first';
import SecondStage from './stages/second';
import ThirdStage from './stages/third';

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
    setStage: React.Dispatch<React.SetStateAction<number>>;
    setNoStages: React.Dispatch<React.SetStateAction<number>>;
  };
  stage: number;
  noStages: number;
}

const View: React.FunctionComponent<ViewType> = p => {
  const containerRef = useRef();
  const windowRef = useRef();

  const getStage = (): JSX.Element => {
    if (p.stage === 1)
      return <FirstStage setStage={p.handlers.setStage} setNoStages={p.handlers.setNoStages} />;
    else if (p.stage === 2)
      return <SecondStage setStage={p.handlers.setStage} setNoStages={p.handlers.setNoStages} />;
    else if (p.stage === 3) return <ThirdStage />;
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
        <StageDots numberOfStages={p.noStages} activeStage={p.stage} setStage={p.handlers.setStage} />
      </Window>
    </Container>
  );
};

export default View;
