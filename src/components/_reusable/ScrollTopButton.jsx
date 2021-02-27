import React, { useState, useEffect } from "react";

import "../../css/_reusable/ScrollTopButton.css";

import { BiUpArrow } from "react-icons/bi";

const ScrollTopButton = () => {
	const [scrollY, setScrollY] = useState(0);
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		const checkScroll = () => {
			window.addEventListener("scroll", () => handleScroll());
		};
		checkScroll();
		return () => window.removeEventListener("scroll", () => handleScroll());
	});

	const handleScroll = () => {
		setScrollY(window.pageYOffset);
		if (scrollY > 300) {
			setShowScroll(true);
		} else {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			type="button"
			className={`scroll_top_btn ${showScroll && "show"}`}
			onClick={scrollTop}
			aria-label="scroll to top"
		>
			<div className="icon_container">
				<BiUpArrow color="white" size={20} />
				<BiUpArrow color="white" size={20} />
			</div>
		</button>
	);
};

export default ScrollTopButton;
