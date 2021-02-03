import React from "react";
import { connect } from "react-redux";

import ProjectList from "../Project/ProjectList";
import "../../css/Admin/Admin.css";

const Admin = ({ projects }) => {
  return (
    <section className="admin_page_container">
      {projects.map((project) => (
        <ProjectList
          id={project.project_id}
          name={project.project_name}
          link={project.project_link}
          duration={project.project_duration}
          client={project.client_name}
        />
      ))}
    </section>
  );
};
const mapStateToProps = ({ projects }) => ({
  projects,
});

export default connect(mapStateToProps, null)(Admin);
