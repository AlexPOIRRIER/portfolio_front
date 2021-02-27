import React from "react";
import { connect } from "react-redux";

import ProjectPreview from "./ProjectPreview";

import "../../css/Project/ProjectList.css";

const ProjectList = ({ allProjects }) => {
	return (
		<section className="project_list_section" id="projects">
			{allProjects && (
				<>
					<h3 className="page_title">Projets :</h3>
					<div className="project_list_container">
						{allProjects.map((project) => (
							<ProjectPreview
								name={project.name}
								background={project.background}
							/>
						))}
					</div>
				</>
			)}
		</section>
	);
};
const mapStateToProps = ({ allProjects }) => ({
	allProjects,
});

export default connect(mapStateToProps, null)(ProjectList);
