import React, { FunctionComponent, RefObject, useReducer, useCallback } from 'react';

import View from './sign-in-menu.view';
import { initialState, reducer, Action } from './sign-in-menu.state';
import post from 'api-comunication/post';
import createLoginEvent from 'utils/custom-events/login.event';

const SignInMenu: FunctionComponent<{
  buttonRef: RefObject<HTMLDivElement>;
}> = p => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const positionLeft: number = p.buttonRef.current.offsetLeft;
  const buttonWidth: number = p.buttonRef.current.offsetWidth;

  const handleLoginInput = useCallback((value: string): void => {
    const action: Action = {
      type: 'INPUT_LOGIN',
      payload: {
        login: value,
      },
    };
    dispatch(action);
  }, []);

  const handlePasswordInput = useCallback((value: string): void => {
    const action: Action = {
      type: 'INPUT_PASSWORD',
      payload: {
        password: value,
      },
    };
    dispatch(action);
  }, []);

  const handleLogin: VoidFunction = useCallback(async () => {
    interface Data extends Object {
      status?: string;
      msg?: string;
      sessionID?: string;
    }

    dispatch({ type: 'SET_LOADING', payload: { loading: true } });
    const data: Data = await post('/login', {
      email: state.login,
      password: state.password,
    });
    console.log(data);
    if (data.status === 'ok') {
      dispatch({ type: 'SET_LOADING', payload: { loading: false } });
      createLoginEvent(data.sessionID);
    } else {
      dispatch({ type: 'SET_LOADING', payload: { loading: false } });
    }
  }, [state]);

  return (
    <View
      positionLeft={positionLeft}
      buttonWidth={buttonWidth}
      handleLoginInput={handleLoginInput}
      handlePasswordInput={handlePasswordInput}
      handleLogin={handleLogin}
      isLoading={state.loading}
    />
  );
};

export default SignInMenu;
