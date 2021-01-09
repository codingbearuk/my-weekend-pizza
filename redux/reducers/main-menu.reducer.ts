import Action from "redux/actions/@action.t";

export default function (state = false, action: Action): boolean {
  switch (action.type) {
    case "OPEN_MAIN_MENU":
      return true;
    case "CLOSE_MAIN_MENU":
      return false;
    default:
      return state;
  }
}
