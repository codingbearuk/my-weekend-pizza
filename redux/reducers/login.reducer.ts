import Action from 'redux/actions/@action.t';
import { User, LoginAction } from 'redux/actions/login.action';

interface UserState extends User {
  isLogged: boolean;
}

const initial: UserState = {
  isLogged: false,
  email: '',
  adress: '',
  city: '',
  postcode: '',
  phone: 0,
};

export default (state: UserState = initial, action: LoginAction | Action): UserState => {
  switch (action.type) {
    case 'LOGIN_USER':
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
    case 'LOGOUT_USER':
      state = initial;
      return state;
    case 'CHANGE_DETAILS':
      if (action.payload.name === 'address') state = { ...state, adress: action.payload.value };
      else if (action.payload.name === 'city') state = { ...state, city: action.payload.value };
      else if (action.payload.name === 'postcode') state = { ...state, postcode: action.payload.value };
      else if (action.payload.name === 'phone') state = { ...state, phone: action.payload.value };
      return state;
    default:
      return state;
  }
};
