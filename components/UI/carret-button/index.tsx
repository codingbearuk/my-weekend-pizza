import React, { useRef, useCallback, useState, useEffect } from 'react';
import gsap from 'gsap';
import { white, yellow } from 'styled/colors';

import View from './carret-button.view';

const CarretButton: React.FunctionComponent<{ onClick: () => any }> = p => {
  const [isActive, setActive] = useState<boolean>(false);
  const plusOneRef: React.RefObject<HTMLDivElement> = useRef();

  const handleOnClickAnimation = useCallback((): void => {
    setActive(true);
    p.onClick();
  }, []);

  const motion = useCallback(() => {
    const plusOne = plusOneRef.current;
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      plusOne,
      {
        fontSize: '4em',
        opacity: 0,
        color: yellow,
        duration: 0.8,
      },
      {
        fontSize: '1.2em',
        opacity: 1,
        color: white,
      }
    )
      .to(plusOne, {
        opacity: 0,
        fontSize: '.1em',
        delay: 0.4,
      })
      .then(() => setActive(false));
  }, []);

  useEffect(() => {
    if (isActive) motion();
  }, [isActive]);

  return (
    <View
      {...{
        refs: {
          plusOne: plusOneRef,
        },
        handleOnClickAnimation,
        isActive,
      }}
    />
  );
};

export default CarretButton;
