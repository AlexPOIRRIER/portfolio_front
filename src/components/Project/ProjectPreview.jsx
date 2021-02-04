import React from "react";
import { Link } from "react-router-dom";

import "../../css/Project/ProjectPreview.css";

const ProjectPreview = ({ name, link, duration, client, background }) => {
  return (
    <div
      className="preview_container"
      style={
        background
          ? { background: `url(${background})`, backgroundSize: "cover", animation: 'backMove 150s infinite' }
          : { backgroundColor: "rgb(0,0,0,0.5)" }
      }
    >
      <h3 className="project_title_preview">{name}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
      <span>{duration}</span>
      <span>{client}</span>
    </div>
  );
};

export default ProjectPreview;
