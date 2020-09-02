import React, { useReducer } from "react";

import View from "./sign-up-menu.view";
import { reducer, Action, initialState } from "./sign-up-menu.state";

const SignUpMenu: React.FunctionComponent<{
  buttonRef: React.RefObject<HTMLDivElement>;
}> = (p) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  function handleInputs(value: string, name: string): void {
    if (name === "email address") {
      dispatch({
        type: "insert email",
        payload: { email: value },
      });
    } else if (name === "password") {
      dispatch({
        type: "insert password",
        payload: { password: value },
      });
    }
  }

  console.log(state);

  return <View {...{ positionLeft, buttonWidth, handleInputs }} />;
};

export default SignUpMenu;
