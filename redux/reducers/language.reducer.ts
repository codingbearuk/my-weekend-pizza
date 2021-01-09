import Action from "../actions/@action.t";

const initial = "eng";

export default (state = initial, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
