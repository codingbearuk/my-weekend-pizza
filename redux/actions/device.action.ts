import Action from './@action.t';

export const setMobile: () => Action = () => ({
  type: 'SET_MOBILE',
});

export const setDesktop: () => Action = () => ({
  type: 'SET_DESKTOP',
});
