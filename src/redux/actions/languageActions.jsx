import axios from "axios";

export const addLanguage = (dispatch) => async (data) => {
  dispatch({
    type: "ADD_LANGUAGE",
    payload: data,
  });
};

export const getAllLanguages = (dispatch) => async () => {
  dispatch({
    type: "GET_ALL_LANGUAGES_REQUEST",
  });
  const result = await axios.get(`${process.env.REACT_APP_API}/languages`);
  const { data } = result;
  dispatch({
    type: "GET_ALL_LANGUAGES_RESULT",
    payload: data,
  });
};
