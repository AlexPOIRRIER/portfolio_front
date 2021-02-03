import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProjectPreview from "../Project/ProjectPreview";

import "../../css/Home/Home.css";

const Home = ({ projects }) => {
  return (
    <>
      <Link to="/admin">ADMIN</Link>
      <h2 className="page_title">Projets :</h2>
      <div className="project_preview_container">
        {projects.map((project) => (
          <ProjectPreview
            name={project.project_name}
            link={project.project_name}
            duration={project.project_duration}
            client={project.client_name}
          />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps, null)(Home);
