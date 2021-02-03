import React from "react";
import { Link } from "react-router-dom";

import "../../css/Project/ProjectList.css";

const ProjectList = ({ id, name, link, duration, client }) => {
  return (
    <Link to={`/editProject/${id}`} className="list_container">
      <h3 className="project_title">{name}</h3>
      {/* <span className="list_value">{name}</span> */}
      <span className="list_value">{link}</span>
      <span className="list_value">{duration}</span>
      <span className="list_value">{client}</span>
    </Link>
  );
};

export default ProjectList;
