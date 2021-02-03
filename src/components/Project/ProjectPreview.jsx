import React from "react";

import "../../css/Project/ProjectPreview.css";

const ProjectPreview = ({ name, link, duration, client }) => {
  return (
    <div className="preview_container">
      <h3 className="project_title">{name}</h3>
      <span>{link}</span>
      <iframe src={link} className="project_iframe" />
      <span>{duration}</span>
      <span>{client}</span>
    </div>
  );
};

export default ProjectPreview;
