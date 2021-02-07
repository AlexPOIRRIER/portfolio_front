import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProjectPreview from "./Project/ProjectPreview";

import "../css/Home.css";

const Home = ({ allProjects }) => {
  return (
    <>
      {allProjects && (
        <>
          <h2 className="page_title">Projets :</h2>
          <div className="project_preview_container">
            {allProjects.map((project) => (
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
const mapStateToProps = ({ allProjects }) => ({
  allProjects,
});

export default connect(mapStateToProps, null)(Home);
