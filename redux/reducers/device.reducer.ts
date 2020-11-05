import Action from 'redux/actions/@action.t';

interface State {
  resolution: string;
}

const initial: State = {
  resolution: 'desktop',
};

export default (state: State = initial, action: Action): State => {
  switch (action.type) {
    case 'SET_MOBILE':
      state = { ...state, resolution: 'mobile' };
      return state;
    case 'SET_DESKTOP':
      state = { ...state, resolution: 'desktop' };
      return state;
    default:
      return state;
  }
};
