import { combineReducers } from "redux";
import allLanguages from "./languageReducer";
import allProjects from "./projectReducer";
import projectLanguages from "./joinLanguageProjectReducer";
import { allMessages, newMessage } from "./messageReducer";
import popUp from "./popupReducer";

const rootReducer = combineReducers({
  allLanguages,
  allProjects,
  projectLanguages,
  popUp,
  allMessages,
  newMessage,
});

export default rootReducer;
