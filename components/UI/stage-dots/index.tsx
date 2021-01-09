import React from 'react';

import { Container, Dot } from './stage-dots.styled';

interface StageDotsType {
  numberOfStages: number;
  activeStage: number;
  setStage: (stage: number) => void;
}

const StageDots: React.FunctionComponent<StageDotsType> = p => {
  const createStages = (): Array<number> => {
    let stages: Array<number> = [];
    for (let i: number = 1; i <= p.numberOfStages; i++) {
      stages = [...stages, i];
    }
    return stages;
  };

  const checkIfActive = (index: number): boolean => {
    const dotNo = index + 1;
    if (dotNo === p.activeStage) return true;
    else return false;
  };

  const stages = createStages();

  return (
    <Container>
      {stages.map((dot: number, index: number) => (
        <Dot key={index} active={checkIfActive(index)} title={`${dot}`} onClick={() => p.setStage(dot)} />
      ))}
    </Container>
  );
};

export default StageDots;
