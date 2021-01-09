import Action from 'redux/actions/@action.t';

interface State {
  isActive: boolean;
}

const initial: State = {
  isActive: false,
};

export default (state = initial, action: Action): State => {
  switch (action.type) {
    case 'SET_CHANGE_ADDRESS_WINDOW_ACTIVE':
      state = { ...state, isActive: true };
      return state;

    case 'SET_CHANGE_ADDRESS_WINDOW_INACTIVE':
      state = { ...state, isActive: false };
      return state;

    default:
      return state;
  }
};
