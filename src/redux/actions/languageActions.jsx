export const setLanguage = (dispatch) => async (language) => {
  dispatch({
    type: "ADD_LANGUAGE",
    payload: language,
  });
};
