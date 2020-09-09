import Action from "redux/actions/@action.t";
import { User, LoginAction } from "redux/actions/login.action";

interface UserState extends User {
  isLogged: boolean;
}

const initial: UserState = {
  isLogged: false,
  email: "",
  adress: "",
  city: "",
  postcode: "",
  phone: 0,
};

export default (
  state: UserState = initial,
  action: LoginAction | Action
): UserState => {
  switch (action.type) {
    case "LOGIN_USER":
      state = {
        ...state,
        isLogged: true,
        email: action.payload.email,
        adress: action.payload.adress,
        city: action.payload.city,
        postcode: action.payload.postcode,
        phone: action.payload.phone,
      };
      return state;
    case "LOGOUT_USER":
      state = initial;
      return state;
    default:
      return state;
  }
};
