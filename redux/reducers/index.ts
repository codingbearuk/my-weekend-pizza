import { combineReducers } from "redux";

import cart from "./cart.reducer";
import language from "./language.reducer";
import mainMenu from "./main-menu.reducer";
import navigationMenues from "./navigation-menues.reducer";

const rootReducer = combineReducers({
  cart,
  language,
  mainMenu,
  navigationMenues,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
