import React from "react";

import "../../css/Project/ProjectPreview.css";

const ProjectPreview = ({ name, link, background }) => {
	return (
		<div
			className="preview_container"
			style={
				background
					? {
							background: `url(${background})`,
							backgroundSize: "cover",
							animation: "backMove 150s infinite",
					  }
					: { backgroundColor: "rgb(0,0,0,0.5)" }
			}
		>
			<h3 className="project_title_preview">{name}</h3>
		</div>
	);
};

export default ProjectPreview;
