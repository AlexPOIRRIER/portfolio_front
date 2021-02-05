import { combineReducers } from "redux";
import languages from "./languageReducer";
import projects from "./projectReducer";
import projectLanguages from "./joinLanguageProjectReducer";
import popUp from "./popupReducer";

const rootReducer = combineReducers({
  languages,
  projects,
  projectLanguages,
  popUp,
});

export default rootReducer;
