export interface State {
  login: string;
  password: string;
  loading: boolean;
  error: string;
}

export interface Action {
  type: string;
  payload: {
    login?: string;
    password?: string;
    loading?: boolean;
    error?: string;
  };
}

export const initialState: State = {
  login: '',
  password: '',
  loading: false,
  error: '',
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INPUT_LOGIN':
      state = { ...state, login: action.payload.login };
      return state;
    case 'INPUT_PASSWORD':
      state = { ...state, password: action.payload.password };
      return state;
    case 'SET_LOADING':
      state = { ...state, loading: action.payload.loading };
      return state;
    case 'SET_ERROR':
      state = { ...state, error: action.payload.error };
      return state;
    default:
      return state;
  }
}
