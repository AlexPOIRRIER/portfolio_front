const language = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LANGUAGE':
      return action.payload;
    case 'DELETE_LANGUAGE':
      return action.payload;
    default:
      return state;
  }
}

export default language;