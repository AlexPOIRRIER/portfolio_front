import { combineReducers } from "redux";
import allProjects from "./projectReducer";
import { allLanguages, currentProjectLanguages } from "./languageReducer";

import { allMessages, newMessage } from "./messageReducer";
import popup from "./popupReducer";

const rootReducer = combineReducers({
	allProjects,
	allLanguages,
	currentProjectLanguages,
	popup,
	allMessages,
	newMessage,
});

export default rootReducer;
