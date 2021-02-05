export const setPopUp = (dispatch) => async (bool) => {
  if (bool) {
    dispatch({
      type: "SHOW_POPUP",
      payload: true,
    });
  } else {
    dispatch({
      type: "HIDE_POPUP",
      payload: false,
    });
  }
};
