import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getAllLanguages } from "./redux/actions/languageActions";
import { getAllProjects } from "./redux/actions/projectActions";

import Header from "./components/Navigation/Header/Header";
import Home from "./components/Home";
import Admin from "./components/Admin";
import CreateProject from "./components/Project/Forms/CreateProject";
import ProjectDetails from "./components/Project/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Navigation/Footer";

import "./App.css";

const App = ({ getAllLanguages, getAllProjects }) => {
  useEffect(() => {
    getAllLanguages();
    getAllProjects();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/admin" component={Admin} />
          <Route path="/createProject" component={CreateProject} />
          <Route path="/editProject/:id" component={CreateProject} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: getAllProjects(dispatch),
  getAllLanguages: getAllLanguages(dispatch),
});

export default connect(null, mapDispatchToProps)(App);
