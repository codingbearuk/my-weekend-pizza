import { combineReducers } from "redux";

import cart from "./cart.reducer";
import language from "./language.reducer";

const rootReducer = combineReducers({
  cart,
  language,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;