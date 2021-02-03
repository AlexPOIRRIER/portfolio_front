export const setProject = (dispatch) => async (project) => {
  dispatch({
    type: "ADD_PROJECT",
    payload: project,
  });
};
