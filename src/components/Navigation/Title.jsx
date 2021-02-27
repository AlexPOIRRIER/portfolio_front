import React from "react";

import "../../css/Navigation/Title.css";

const Header = () => {
	const title = "Alexandre POIRRIER";
	const subtitle = "<Web developer />";
	return (
		<div className="title_container">
			<h1 className="title" id="portfolio_title">
				{title}
			</h1>
			<h2 className="subtitle">{subtitle}</h2>
		</div>
	);
};

export default Header;
