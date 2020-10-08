import Action from 'redux/actions/@action.t';

interface State {
  isOpen: boolean;
}

const initial = {
  isOpen: false,
};

export default (state: State = initial, action: Action): State => {
  switch (action.type) {
    case 'OPEN_FINISH_AND_PAY_WINDOW':
      state = { ...state, isOpen: true };
      return state;
    case 'CLOSE_FINISH_AND_PAY_WINDOW':
      state = { ...state, isOpen: false };
      return state;
    default:
      return state;
  }
};
