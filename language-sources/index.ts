import store from "redux/store";
import Language from "./@language.t";
import eng from "./eng";

const getLanguage = (): Language => {
  const current = store.getState().language;
  if (current === "eng") {
    return eng;
  }
};

export default getLanguage();
