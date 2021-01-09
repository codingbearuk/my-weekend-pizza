import React, { FunctionComponent, useRef, useEffect } from "react";
import { gsap } from "gsap";

import View from "./menu.view";

const SignInMenu: FunctionComponent<{
  positionLeft: number;
  buttonWidth: number;
}> = (p) => {
  const container: React.RefObject<HTMLDivElement> = useRef();

  function enterAnimations(): void {
    const tl: gsap.core.Timeline = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      container.current,
      {
        opacity: 0,
        duration: 0.3,
        height: 0,
      },
      {
        opacity: 1,
        height: "auto",
      }
    );
  }

  useEffect(() => {
    enterAnimations();
  }, []);

  return (
    <View {...p} containerRef={container}>
      {p.children}
    </View>
  );
};

export default SignInMenu;
