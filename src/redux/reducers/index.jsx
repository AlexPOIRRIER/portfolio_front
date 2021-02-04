import { combineReducers } from "redux";
import languages from "./languageReducer";
import projects from "./projectReducer";
import projectLanguages from "./joinLanguageProjectReducer";

const rootReducer = combineReducers({
  languages,
  projects,
  projectLanguages,
});

export default rootReducer;
