import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../css/Project/ProjectList.css";
import { deleteProject } from "../../redux/actions/projectActions";
import { DeleteIcon } from "../../utils/svg";

const ProjectList = ({
  id,
  name,
  link,
  duration,
  client,
  background,
  projects,
  deleteProject,
}) => {
  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API}/projects/${id}`);
    deleteProject(projects, id);
  };

  return (
    <Link
      to={`/editProject/${id}`}
      className="list_container"
      style={{ background: `url(${background})`, backgroundSize: "cover" }}
    >
      {name && <h3 className="project_title">{name}</h3>}
      {link && (
        <div className="list_item">
          <span className="list_name">Lien</span>
          <span className="list_value">{link}</span>
        </div>
      )}
      {duration && (
        <div className="list_item">
          <span className="list_name">Durée</span>
          <span className="list_value">{duration}</span>
        </div>
      )}
      {client && (
        <div className="list_item">
          <span className="list_name">Client</span>
          <span className="list_value">{client}</span>
        </div>
      )}
      <button
        type="button"
        onClick={handleDelete}
        className="delete_project_btn"
      >
        <DeleteIcon cssClass="delete_project_icon" />
      </button>
    </Link>
  );
};

const mapStateToProps = ({ projects }) => ({
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject: deleteProject(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
