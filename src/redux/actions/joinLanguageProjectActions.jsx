import axios from "axios";

export const getProjectLanguages = (dispatch) => async (projectId) => {
  dispatch({
    type: "GET_PROJECT_LANGUAGES",
  });
  const result = await axios.get(
    `${process.env.REACT_APP_API}/jlp/${projectId}`
  );
  const { data } = result;
  dispatch({
    type: "SET_PROJECT_LANGUAGES",
    payload: data,
  });
};

export const setProjectLanguages = (dispatch) => async (data) => {
  if (data) {
    dispatch({
      type: "SET_PROJECT_LANGUAGES",
      payload: data,
    });
  } else {
    dispatch({
      type: "RESET_PROJECT_LANGUAGES",
    });
  }
};
