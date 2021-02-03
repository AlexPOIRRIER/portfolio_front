import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import CreateProject from "./components/Project/CreateProject";
import EditProject from "./components/Project/EditProject";

import { getAllLanguages } from "./redux/actions/languageActions";
import { getAllProjects } from "./redux/actions/projectActions";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

const App = ({ projects, getAllLanguages, getAllProjects }) => {
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
          <Route path="/admin" component={Admin} />
          <Route path="/createProject" component={CreateProject} />
          <Route path="/editProject/:id" component={CreateProject} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ projects }) => ({
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: getAllProjects(dispatch),
  getAllLanguages: getAllLanguages(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
