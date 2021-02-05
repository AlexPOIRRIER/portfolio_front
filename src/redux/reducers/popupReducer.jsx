const popUp = (state = false, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return action.payload;
    case "HIDE_POPUP":
      return action.payload;
    default:
      return state;
  }
};

export default popUp;
