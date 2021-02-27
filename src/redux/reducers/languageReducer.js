export const allLanguages = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_LANGUAGES":
      return action.payload;
    default:
      return state;
  }
};

export const currentProjectLanguages = (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECT_LANGUAGES":
      return action.payload;
    case "RESET_PROJECT_LANGUAGES":
      return [];
    default:
      return state;
  }
};