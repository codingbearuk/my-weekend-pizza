import Action from 'redux/actions/@action.t';

export const setPageScrollTrue = (): Action => {
  return {
    type: 'SET_PAGE_SCROLL_TRUE',
  };
};

export const setPageScrollFalse = (): Action => {
  return {
    type: 'SET_PAGE_SCROLL_FALSE',
  };
};
