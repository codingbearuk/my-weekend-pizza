import React, { FunctionComponent, useRef, RefObject, useEffect } from 'react';
import { X, ArrowRightCircleFill } from 'react-bootstrap-icons';

import { Container, MenuBox, CloseContainer, MenuItem } from './main-menu.styles';
import { View } from './@main-menu.t';
import language from 'language-sources';
import menu, { MenuItem as MenuItemType } from 'utils/menues/menu.t';

const MainMenu: FunctionComponent<View> = p => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const menuBoxRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    p.animations.enter(containerRef, menuBoxRef);
  }, []);

  return (
    <>
      <Container ref={containerRef} onClick={() => p.animations.close(containerRef, menuBoxRef)} />
      <MenuBox ref={menuBoxRef}>
        <CloseContainer>
          <X size='20px' onClick={() => p.animations.close(containerRef, menuBoxRef)} />
        </CloseContainer>
        <h1>{language.menu.header}</h1>
        <nav>
          {menu.map((item: MenuItemType) => (
            <MenuItem key={item.name} onClick={() => p.handleMenuItemClick(item.name)}>
              <ArrowRightCircleFill />
              {item.title}
            </MenuItem>
          ))}
        </nav>
      </MenuBox>
    </>
  );
};

export default MainMenu;
