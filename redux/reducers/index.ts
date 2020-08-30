import { combineReducers } from "redux";

import cart from "./cart.reducer";
import language from "./language.reducer";
import mainMenu from "./main-menu.reducer";

const rootReducer = combineReducers({
  cart,
  language,
  mainMenu,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
