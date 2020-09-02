export interface State {
  email: string;
  password: string;
  address: string;
  city: string;
  postcode: string;
}

export interface Action {
  type: string;
  payload: {
    email?: string;
    password?: string;
    address?: string;
    city?: string;
    postcode?: string;
  };
}

export const initialState: State = {
  email: "",
  password: "",
  address: "",
  city: "",
  postcode: "",
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "insert email":
      state = { ...state, email: action.payload.email };
      return state;
    case "insert password":
      state = { ...state, password: action.payload.password };
      return state;
    case "insert address":
      state = { ...state, address: action.payload.address };
      return state;
    case "insert city":
      state = { ...state, city: action.payload.city };
      return state;
    case "insert postcode":
      state = { ...state, postcode: action.payload.postcode };
      return state;
    default:
      return state;
  }
}
