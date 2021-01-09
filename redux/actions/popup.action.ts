import Action from "redux/actions/@action.t";

export interface Alert {
  title: string;
  msg: string;
}

export const showPopup = (alert: Alert): Action => {
  return {
    type: "SHOW_POPUP",
    payload: alert,
  };
};

export const colsePopup = (): Action => {
  return {
    type: "CLOSE_POPUP",
  };
};
