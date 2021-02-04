import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProjectPreview from "../Project/ProjectPreview";
import LoadingSpinner from "../_reusable/LoadingSpinner";

import { getProjectLanguages } from "../../redux/actions/joinLanguageProjectActions";

import "../../css/Home/ProjectDetails.css";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../utils/svg";
import projectLanguages from "../../redux/reducers/joinLanguageProjectReducer";

const ProjectDetails = ({
  projects,
  match,
  getProjectLanguages,
  projectLanguages,
}) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    if (projects) {
      setCurrentProject(projects.find((project) => project.project_id === +id));
      getProjectLanguages(+id);
    }
    setLoading(false);
  }, [projects]);

  console.log(projectLanguages);
  return (
    <>
      <Link to="/" className="back_btn">
        <ArrowIcon cssClass="back_icon" />
      </Link>
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
              <span className="info_value">
                {currentProject.client_duration}
              </span>
              <span className="info_title">Client : </span>
              <span className="info_value">{currentProject.client_name}</span>
              <span className="info_title">Technologies utilisées : </span>
              {projectLanguages.map((lang) => (
                <span className="info_value">{lang.name}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ projects, projectLanguages }) => ({
  projects,
  projectLanguages,
});

const mapDispatchToProps = (dispatch) => ({
  getProjectLanguages: getProjectLanguages(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
