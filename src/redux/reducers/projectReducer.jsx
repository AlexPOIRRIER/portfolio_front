const project = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return action.payload;
    case 'DELETE_PROJECT':
      return action.payload;
    default:
      return state;
  }
}

export default project;