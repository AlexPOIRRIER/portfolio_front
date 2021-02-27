import axios from "axios";

export const setAllLanguages = (dispatch) => async () => {
	dispatch({
		type: "GET_ALL_LANGUAGES",
	});
	const result = await axios.get(`${process.env.REACT_APP_API}/languages`);
	const { data } = result;
	dispatch({
		type: "SET_ALL_LANGUAGES",
		payload: data,
	});
};

export const setCurrentProjectLanguages = (dispatch) => async (projectId) => {
  dispatch({
    type: "GET_PROJECT_LANGUAGES",
  });
  const result = await axios.get(
    `${process.env.REACT_APP_API}/jlp/${projectId}`
  );
  const { data } = result;
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