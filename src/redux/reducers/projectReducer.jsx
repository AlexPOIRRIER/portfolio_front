const projects = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PROJECTS_RESULT":
      return action.payload;
    case "ADD_PROJECT_RESULT":
      return [...state, action.payload];
    case "DELETE_PROJECT":
      return action.payload;
    case "SET_PROJECT":
      return action.payload;
    default:
      return state;
  }
};

export default projects;
