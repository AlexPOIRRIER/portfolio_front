import axios from "axios";

export const getAllProjects = (dispatch) => async () => {
  dispatch({
    type: "GET_ALL_PROJECTS_REQUEST",
  });
  let arrId = [];
  const result = await axios.get(`${process.env.REACT_APP_API}/projects`);
  const { data } = result;
  if (data) {
    data.map(
      (data) =>
        (arrId = axios.get(
          `${process.env.REACT_APP_API}/jlp/${data.project_id}`
        ))
    );
  }
  dispatch({
    type: "GET_ALL_PROJECTS_RESULT",
    payload: data,
  });
};

export const addProject = (dispatch) => async (projectId) => {
  dispatch({
    type: "ADD_PROJECT_REQUEST",
  });
  const result = await axios.get(
    `${process.env.REACT_APP_API}/projects/${projectId}`
  );
  const { data } = result;
  dispatch({
    type: "ADD_PROJECT_RESULT",
    payload: data,
  });
};

// export const setProject = (dispatch) => async (allProjects) => {
//   dispatch({
//     type: "SET_PROJECT",
//     payload: allProjects,
//   });
// };

export const deleteProject = (dispatch) => async (projects, projectId) => {
  dispatch({
    type: "DELETE_PROJECT",
    payload: projects.filter((e) => e.project_id !== projectId),
  });
};
