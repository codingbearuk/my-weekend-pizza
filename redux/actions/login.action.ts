import Action from 'redux/actions/@action.t';
import post from 'api-comunication/post';

import { menuOFF } from './navigation.actions';

// types
export interface Body {
  sessionID: string;
}

export interface User {
  email: string;
  adress: string;
  city: string;
  postcode: string;
  phone: number;
}

export interface Data extends Object {
  status?: string;
  user?: User;
}

export interface LoginAction extends Action {
  payload: {
    user: User;
  };
}

export const loginUser = () => dispatch => {
  const id: string = localStorage.getItem('sessionID');
  const body: Body = {
    sessionID: id,
  };
  post('/authorisation', body).then((data: Data) => {
    if (data.status === 'ok') {
      const action = {
        type: 'LOGIN_USER',
        payload: {
          ...data.user,
        },
      };
      dispatch(menuOFF());
      dispatch(action);
    }
  });
};

export const logoutUSer = (): Action => {
  localStorage.removeItem('sessionID');
  return {
    type: 'LOGOUT_USER',
  };
};
