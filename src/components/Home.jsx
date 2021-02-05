import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProjectPreview from "./Project/ProjectPreview";

import "../css/Home.css";

const Home = ({ projects }) => {
  return (
    <>
      {projects && (
        <>
          <h2 className="page_title">Projets :</h2>
          <div className="project_preview_container">
            {projects.map((project) => (
              <Link to={`/project/${project.project_id}`}>
                <ProjectPreview
                  name={project.project_name}
                  background={project.background}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps, null)(Home);
