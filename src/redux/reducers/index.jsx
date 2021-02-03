import { combineReducers } from "redux";
import languages from "./languageReducer";
import projects from "./projectReducer";

const rootReducer = combineReducers({
  languages,
  projects,
});

export default rootReducer;
