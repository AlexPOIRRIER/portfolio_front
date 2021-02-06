const popUp = (state = { toggle: false, func: null }, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return { ...state, toggle: action.payload };
    case "HIDE_POPUP":
      return { ...state, toggle: action.payload };
    case "SET_POPUP_FUNCTION":
      return { ...state, func: action.payload };
    case "RESET_POPUP_FUNCTION":
      return { ...state, func: action.payload };
    default:
      return state;
  }
};

export default popUp;
