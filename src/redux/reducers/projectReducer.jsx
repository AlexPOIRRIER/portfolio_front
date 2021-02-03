const projects = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PROJECTS_RESULT":
      return action.payload;
    case "SET_PROJECT_LANGUAGES":
    return
    // case "ADD_PROJECT":
    //   return action.payload;
    // case "DELETE_PROJECT":
    //   return action.payload;
    default:
      return state;
  }
};

export default projects;
