export interface State {
  email: string;
  password: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  errors: Errors;
}

export interface Action {
  type: string;
  payload: {
    email?: string;
    password?: string;
    address?: string;
    city?: string;
    postcode?: string;
    phone?: string;
    errorType?: string;
    generalError?: string;
  };
}

export interface Errors {
  email: boolean;
  password: boolean;
  address: boolean;
  city: boolean;
  postcode: boolean;
  phone: boolean;
  general: string;
}

export const initialState: State = {
  email: "",
  password: "",
  address: "",
  city: "",
  postcode: "",
  phone: "",
  errors: {
    email: false,
    password: false,
    address: false,
    city: false,
    postcode: false,
    phone: false,
    general: "",
  },
};

export function reducer(state: State, action: Action) {
  const newErrors = { ...state.errors };
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
    case "insert phone":
      state = { ...state, phone: action.payload.phone };
      return state;
    case "throw error":
      newErrors[action.payload.errorType] = true;
      state = { ...state, errors: newErrors };
      return state;
    case "release error":
      newErrors[action.payload.errorType] = false;
      state = { ...state, errors: newErrors };
      return state;
    case "throw general error":
      newErrors["general"] = action.payload.generalError;
      state = { ...state, errors: newErrors };
      return state;
    case "release general error":
      newErrors["general"] = "";
      state = { ...state, errors: newErrors };
      return state;
    default:
      return state;
  }
}
