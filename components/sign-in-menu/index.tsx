import React, {
  FunctionComponent,
  RefObject,
  useReducer,
  useCallback,
} from "react";

import View from "./sign-in-menu.view";
import { initialState, reducer, Action } from "./sign-in-menu.state";

const SignInMenu: FunctionComponent<{
  buttonRef: RefObject<HTMLDivElement>;
}> = (p) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  const handleLoginInput = useCallback((value: string): void => {
    const action: Action = {
      type: "INPUT_LOGIN",
      payload: {
        login: value,
      },
    };
    dispatch(action);
  }, []);

  const handlePasswordInput = useCallback((value: string): void => {
    const action: Action = {
      type: "INPUT_PASSWORD",
      payload: {
        password: value,
      },
    };
    dispatch(action);
  }, []);

  return (
    <View
      positionLeft={positionLeft}
      buttonWidth={buttonWidth}
      handleLoginInput={handleLoginInput}
      handlePasswordInput={handlePasswordInput}
    />
  );
};

export default SignInMenu;
