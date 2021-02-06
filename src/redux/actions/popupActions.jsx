export const setPopUp = (dispatch) => async (bool, func) => {
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

export const setPopUpFunction = (dispatch) => async (func) => {
  if (func) {
    dispatch({
      type: "SET_POPUP_FUNCTION",
      payload: func,
    });
  } else {
    dispatch({
      type: "RESET_POPUP_FUNCTION",
      payload: null,
    });
  }
};
