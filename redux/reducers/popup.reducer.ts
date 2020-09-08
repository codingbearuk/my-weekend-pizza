import Action from "redux/actions/@action.t";

export interface State {
  isOpen: boolean;
  title: string;
  msg: string;
}

const initial = {
  isOpen: false,
  title: "",
  msg: "",
};

export default (state: State = initial, action: Action): State => {
  switch (action.type) {
    case "SHOW_POPUP":
      state = {
        ...state,
        isOpen: true,
        title: action.payload.title,
        msg: action.payload.msg,
      };
      return state;

    case "CLOSE_POPUP":
      state = initial;
      return state;

    default:
      return state;
  }
};
