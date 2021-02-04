import React from "react";
import { Link } from "react-router-dom";

import "../../css/Project/ProjectPreview.css";

const ProjectPreview = ({ name, link, duration, client, background }) => {
  background && console.log(background);
  return (
    <div
      className="preview_container"
      style={{ background: `url(${background})` }}
    >
      <h3 className="project_title">{name}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
      <span>{duration}</span>
      <span>{client}</span>
    </div>
  );
};

export default ProjectPreview;
