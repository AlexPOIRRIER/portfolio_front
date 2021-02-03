const languages = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_LANGUAGES_RESULT":
      return action.payload;
    case "ADD_LANGUAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default languages;
