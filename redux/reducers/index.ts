import { combineReducers } from "redux";

import cart from "./cart.reducer";
import language from "./language.reducer";
import mainMenu from "./main-menu.reducer";
import navigationMenues from "./navigation-menues.reducer";
import popup from "./popup.reducer";

const rootReducer = combineReducers({
  cart,
  language,
  mainMenu,
  navigationMenues,
  popup,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
