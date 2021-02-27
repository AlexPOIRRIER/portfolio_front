import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

import ScrollTopButton from "../_reusable/ScrollTopButton";

import {
	HiMenu as MenuIcon,
	HiOutlineX as CloseMenuIcon,
} from "react-icons/hi";
import {
	RiHomeLine as HomeIcon,
	RiContactsLine as AboutMeIcon,
} from "react-icons/ri";
import { VscMail as CloseMailIcon } from "react-icons/vsc";
import { BsGrid as ProjectIcon } from "react-icons/bs";

import "../../css/Navigation/NavBar.css";

const NavBar = () => {
	const [scrollY, setScrollY] = useState(0);
	const [showMenu, setShowMenu] = useState(false);

	const iconSize = 35;

	useEffect(() => {
		const checkScroll = () => {
			window.addEventListener("scroll", () => handleScroll());
		};
		checkScroll();
		return () => window.removeEventListener("scroll", () => handleScroll());
	});

	const handleScroll = () => {
		setScrollY(window.pageYOffset);
		if (scrollY > 850) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	};
	console.log(window.pageYOffset);
	return (
		<nav className="side_bar_container">
			{/* <button className="toggle_btn" onClick={() => setShowMenu(!showMenu)}>
				{showMenu ? (
					<CloseMenuIcon size={iconSize} />
				) : (
					<MenuIcon size={iconSize} />
				)}
			</button> */}
			{showMenu && (
				<>
					<NavHashLink
						smooth
						to="#home"
						className={"side_bar_btn"}
						activeClassName={"active_side_btn"}
					>
						<HomeIcon size={iconSize} />
					</NavHashLink>
					<NavHashLink
						smooth
						to="#about"
						className={"side_bar_btn"}
						activeClassName={"active_side_btn"}
					>
						<AboutMeIcon size={iconSize} />
					</NavHashLink>
					<NavHashLink
						smooth
						to="#projects"
						className={"side_bar_btn"}
						activeClassName={"active_side_btn"}
					>
						<ProjectIcon size={iconSize} />
					</NavHashLink>
					<NavHashLink
						smooth
						to="#contact"
						className={"side_bar_btn"}
						activeClassName={"active_side_btn"}
					>
						<CloseMailIcon size={iconSize} />
					</NavHashLink>
				</>
			)}
			<ScrollTopButton />
		</nav>
	);
};

export default NavBar;
