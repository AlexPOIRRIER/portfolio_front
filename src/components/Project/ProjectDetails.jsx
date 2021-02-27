import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProjectPreview from "./ProjectPreview";
import LoadingSpinner from "../_reusable/LoadingSpinner";

import { setCurrentProjectLanguages } from "../../redux/actions/languageActions";

import "../../css/Project/ProjectDetails.css";

import { ArrowIcon } from "../../utils/svg";

const ProjectDetails = ({
	match,
	allProjects,
	currentProjectLanguages,
	setCurrentProjectLanguages,
}) => {
	const { id } = match.params;
	const [loading, setLoading] = useState(true);
	const [currentProject, setCurrentProject] = useState();

	useEffect(() => {
		if (allProjects) {
			setCurrentProject(allProjects.find((project) => project.id === +id));
			setCurrentProjectLanguages(+id);
		}
		setLoading(false);
	}, [id, allProjects, setCurrentProjectLanguages]);

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
							name={currentProject.name}
						/>
						<div className="info_container">
							<h2 className="info_project_title">{currentProject.name}</h2>
							<span className="info_title">Lien vers l'application : </span>
							<a
								href={currentProject.link}
								target="_blank"
								rel="noreferrer"
								className="info_value"
							>
								{currentProject.name}
							</a>
							<span className="info_title">Durée du projet : </span>
							<span className="info_value">{currentProject.duration}</span>
							<span className="info_title">Description du projet : </span>
							<span
								className="info_value"
								dangerouslySetInnerHTML={{ __html: currentProject.description }}
							></span>
							<span className="info_title">Client : </span>
							<span className="info_value">{currentProject.client_name}</span>
							<span className="info_title">Technologies utilisées : </span>
							{currentProjectLanguages.map((lang) => (
								<span className="info_value" key={lang.id}>
									{lang.name}
								</span>
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
};

const mapStateToProps = ({ allProjects, currentProjectLanguages }) => ({
	allProjects,
	currentProjectLanguages,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentProjectLanguages: setCurrentProjectLanguages(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
