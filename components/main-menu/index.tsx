import React, { FunctionComponent, useCallback, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import { gsap } from 'gsap';

import { closeMenu } from 'redux/actions/menu.action';
import {} from './@main-menu.t';
import View from './main-menu.view';

const MainMenu: FunctionComponent<{}> = ({}) => {
  const mainMenuState = useSelector((s: RootState) => s.mainMenu);

  const dispatch = useDispatch();

  const handleCloseMainMenu = useCallback(() => {
    dispatch(closeMenu());
  }, []);

  const enterAnimation = useCallback(
    (container: RefObject<HTMLDivElement>, menu: RefObject<HTMLDivElement>) => {
      const tl: gsap.core.Timeline = gsap.timeline({ repeat: 0, delay: 0 });
      tl.fromTo(
        container.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        {
          opacity: 1,
        }
      ).fromTo(
        menu.current,
        {
          opacity: 0,
          x: -500,
          duration: 0.6,
        },
        {
          opacity: 1,
          x: 0,
        }
      );
    },
    []
  );

  const handleMenuItemClick = useCallback((id: string) => {
    const element: HTMLElement = document.getElementById(id);
    const position: number = element.offsetTop;
    scrollTo(0, position);
    handleCloseMainMenu();
  }, []);

  const closeAnimation = useCallback(
    (container: RefObject<HTMLDivElement>, menu: RefObject<HTMLDivElement>) => {
      const tl: gsap.core.Timeline = gsap.timeline({ repeat: 0, delay: 0 });
      tl.to(menu.current, {
        opacity: 0,
        x: -500,
        duration: 0.3,
      })
        .to(container.current, {
          opacity: 0,
          duration: 0.3,
        })
        .then(() => handleCloseMainMenu());
    },
    []
  );

  return (
    <View
      handleMenuItemClick={handleMenuItemClick}
      closeMenu={handleCloseMainMenu}
      animations={{
        enter: enterAnimation,
        close: closeAnimation,
      }}
    />
  );
};

export default MainMenu;
