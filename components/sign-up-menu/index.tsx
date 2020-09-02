import React from "react";

import View from "./sign-up-menu.view";

const SignUpMenu: React.FunctionComponent<{
  buttonRef: React.RefObject<HTMLDivElement>;
}> = (p) => {
  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  return <View {...{ positionLeft, buttonWidth }} />;
};

export default SignUpMenu;
