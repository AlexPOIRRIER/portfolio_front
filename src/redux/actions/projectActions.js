import axios from "axios";

export const setAllProjects = (dispatch) => async () => {
  dispatch({
    type: "GET_ALL_PROJECTS",
  });
  const result = await axios.get(`${process.env.REACT_APP_API}/projects`);
  const { data } = result;

  dispatch({
    type: "SET_ALL_PROJECTS",
    payload: data,
  });
};

