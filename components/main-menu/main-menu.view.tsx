import React, { FunctionComponent, useRef, RefObject, useEffect } from "react";
import { X } from "react-bootstrap-icons";

import { Container, MenuBox, CloseContainer } from "./main-menu.styles";
import { View } from "./@main-menu.t";
import language from "language-sources";

const MainMenu: FunctionComponent<View> = (p) => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const menuBoxRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    p.animations.enter(containerRef, menuBoxRef);
  }, []);

  return (
    <>
      <Container
        ref={containerRef}
        onClick={() => p.animations.close(containerRef, menuBoxRef)}
      ></Container>
      <MenuBox ref={menuBoxRef}>
        <CloseContainer>
          <X
            size="20px"
            onClick={() => p.animations.close(containerRef, menuBoxRef)}
          />
        </CloseContainer>
        <h1>{language.menu.header}</h1>
      </MenuBox>
    </>
  );
};

export default MainMenu;
