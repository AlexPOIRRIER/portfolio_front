import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getAllProjects } from "../redux/actions/projectActions";

import ProjectList from "./Project/ProjectList";

import { AddIcon } from "../utils/svg";

import "../css/Admin.css";

const Admin = ({ projects, getAllProjects }) => {
  useEffect(() => {
    getAllProjects();
  }, [window.location.pathname]);

  return (
    <section className="admin_page_container">
      <h2 className="list_title">Ajouter un nouveau projet</h2>
      <Link to="/createProject" className="list_container add_list">
        <AddIcon cssClass="add_icon" />
      </Link>
      <h2 className="list_title">Mes projets</h2>
      <span>(Cliquez sur un projet pour l'éditer)</span>
      {projects.map((project) => (
        <ProjectList
          id={project.project_id}
          name={project.project_name}
          link={project.project_link}
          duration={project.project_duration}
          client={project.client_name}
          background={project.background}
        />
      ))}
    </section>
  );
};
const mapStateToProps = ({ projects }) => ({
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: getAllProjects(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
