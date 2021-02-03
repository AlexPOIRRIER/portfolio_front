import axios from "axios";

export const setProject = (dispatch) => async (project) => {
  dispatch({
    type: "ADD_PROJECT",
    payload: project,
  });
};

export const getAllProjects = (dispatch) => async () => {
  dispatch({
    type: "GET_ALL_PROJECTS_REQUEST",
  });
  let arrId = []
  const result = await axios.get(`${process.env.REACT_APP_API}/projects`);
  const { data } = result;
  if (data) {
    data.map(data => 
    arrId =  axios.get(`${process.env.REACT_APP_API}/jlp/${data.project_id}`))
    }
  dispatch({
    type: "GET_ALL_PROJECTS_RESULT",
    payload: data,
  });
};
