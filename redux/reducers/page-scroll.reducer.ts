import Action from 'redux/actions/@action.t';

export default (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case 'SET_PAGE_SCROLL_TRUE':
      state = true;
      return state;
    case 'SET_PAGE_SCROLL_FALSE':
      state = false;
      return state;
    default:
      return state;
  }
};
