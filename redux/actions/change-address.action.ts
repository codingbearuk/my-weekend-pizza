import Action from './@action.t';

export const setActive = (): Action => ({
  type: 'SET_CHANGE_ADDRESS_WINDOW_ACTIVE',
});

export const setInactive = (): Action => ({
  type: 'SET_CHANGE_ADDRESS_WINDOW_INACTIVE',
});
