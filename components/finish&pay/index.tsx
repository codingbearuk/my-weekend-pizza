import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gsap from 'gsap';

import View from './finish&pay.view';
import { closeFinishAndPayWindow } from 'redux/actions/finish&pay.action';

const FinishAndPay: React.FunctionComponent<{}> = p => {
  const [stage, setStage] = useState<number>(1);
  const [noStages, setNoStages] = useState<number>(1);

  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => dispatch(closeFinishAndPayWindow()), []);

  const enterAnimation = (
    containerEl: React.RefObject<HTMLDivElement>,
    windowEl: React.RefObject<HTMLDivElement>
  ) => {
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      containerEl,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
      }
    ).fromTo(
      windowEl,
      {
        opacity: 0,
        width: 0,
        overflowX: 'hidden',
      },
      {
        opacity: 1,
        width: '80%',
        duration: 0.7,
      }
    );
  };

  const handleClose = (
    containerEl: React.RefObject<HTMLDivElement>,
    windowEl: React.RefObject<HTMLDivElement>
  ) => {
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      windowEl,
      {
        opacity: 1,
        width: '80%',
      },
      {
        opacity: 0,
        width: '0px',
        duration: 0.7,
      }
    )
      .fromTo(
        containerEl,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.4,
        }
      )
      .then(() => handleCloseModal());
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflowY = 'hidden';
    return () => {
      body.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <View
      {...{
        handlers: {
          handleCloseModal: handleClose,
          enterAnimation,
          setStage,
          setNoStages,
        },
        stage,
        noStages,
      }}
    />
  );
};

export default FinishAndPay;
