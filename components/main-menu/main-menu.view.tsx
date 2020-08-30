import React, { FunctionComponent, useRef, RefObject, useEffect } from "react";

import { Container, MenuBox } from "./main-menu.styles";
import { View } from "./@main-menu.t";

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
      <MenuBox ref={menuBoxRef}></MenuBox>
    </>
  );
};

export default MainMenu;
