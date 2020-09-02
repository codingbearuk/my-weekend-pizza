export interface State {
  login: string;
  password: string;
}

export interface Action {
  type: string;
  payload: {
    login?: string;
    password?: string;
  };
}

export const initialState: State = {
  login: "",
  password: "",
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INPUT_LOGIN":
      state = { ...state, login: action.payload.login };
      return state;
    case "INPUT_PASSWORD":
      state = { ...state, password: action.payload.password };
      return state;
    default:
      return state;
  }
}
