import React from "react";

import CV from "../../assets/pictures/CV - Alexandre POIRRIER.webp";

import "../../css/About/About.css";

const About = () => {
	return (
		<section className="about_me_section" id="about">
			<img src={CV} className="cv_picture" />
		</section>
	);
};

export default About;
