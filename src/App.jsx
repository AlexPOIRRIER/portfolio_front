import { useEffect } from "react";
import { connect } from "react-redux";

import { setAllLanguages } from "./redux/actions/languageActions";
import { setAllProjects } from "./redux/actions/projectActions";

import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Home/Home";
import ProjectList from "./components/Project/ProjectList";
import Contact from "./components/Contact/Contact";

import "./App.css";
import About from "./components/About/About";

const App = ({ setAllLanguages, setAllProjects }) => {
	useEffect(() => {
		setAllProjects();
		setAllLanguages();
	}, [setAllLanguages, setAllProjects]);

	return (
		<div className="App">
			<main>
				<Home />
				<About />
				<ProjectList />
				<Contact />
			</main>
			<NavBar />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setAllProjects: setAllProjects(dispatch),
	setAllLanguages: setAllLanguages(dispatch),
});

export default connect(null, mapDispatchToProps)(App);
