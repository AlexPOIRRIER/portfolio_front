import React from "react";
import { HashLink } from "react-router-hash-link";

import Title from "../Navigation/Title";

import { BiDownArrow as ArrowIcon } from "react-icons/bi";

import "../../css/Home/Home.css";

const Home = () => {
	return (
		<section className="home_section" id="home">
			<Title />
			<HashLink smooth to="#about" className="arrow_container">
				<ArrowIcon size={100} />
				<ArrowIcon size={100} />
			</HashLink>
		</section>
	);
};

export default Home;
