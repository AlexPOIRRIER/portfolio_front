import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProjectPreview from "../Project/ProjectPreview";
import LoadingSpinner from "../_reusable/LoadingSpinner";

import "../../css/Home/ProjectDetails.css";

const ProjectDetails = ({ projects, match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    if (projects) {
      setCurrentProject(projects.find((project) => project.project_id === +id));
    }
    setLoading(false);
  }, [projects]);

  console.log(currentProject);
  return (
    <div className="project_details_container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ProjectPreview
            background={currentProject.background}
            name={currentProject.project_name}
          />
          <div className="info_container">
            <h2 className="info_project_title">
              {currentProject.project_name}
            </h2>
            <span className="info_title">Lien vers l'application : </span>
            <a
              href={currentProject.project_link}
              target="_blank"
              className="info_value"
            >
              {currentProject.project_link}
            </a>
            <span className="info_title">Durée du projet : </span>
            <span className="info_value">{currentProject.client_duration}</span>
            <span className="info_title">Description : </span>
            <span className="info_title">Client : </span>
            <span className="info_value">{currentProject.client_name}</span>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps, null)(ProjectDetails);
