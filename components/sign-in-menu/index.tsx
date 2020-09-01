import React, { FunctionComponent, RefObject } from "react";

import View from "./sign-in-menu.view";

const SignInMenu: FunctionComponent<{
  buttonRef: RefObject<HTMLDivElement>;
}> = (p) => {
  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  function handleLoginInput(value: string): void {
    console.log(value);
  }

  return (
    <View
      positionLeft={positionLeft}
      buttonWidth={buttonWidth}
      handleLoginInput={handleLoginInput}
    />
  );
};

export default SignInMenu;
