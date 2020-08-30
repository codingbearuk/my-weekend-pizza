import Action from "redux/actions/@action.t";

export function openMenu(): Action {
  return {
    type: "OPEN_MAIN_MENU",
  };
}

export function closeMenu(): Action {
  return {
    type: "CLOSE_MAIN_MENU",
  };
}
