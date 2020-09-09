export interface State {
  login: string;
  password: string;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: {
    login?: string;
    password?: string;
    loading?: boolean;
  };
}

export const initialState: State = {
  login: "",
  password: "",
  loading: false,
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INPUT_LOGIN":
      state = { ...state, login: action.payload.login };
      return state;
    case "INPUT_PASSWORD":
      state = { ...state, password: action.payload.password };
      return state;
    case "SET_LOADING":
      state = { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
