import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getAllLanguages } from "./redux/actions/languageActions";
import { getAllProjects } from "./redux/actions/projectActions";

import Header from "./components/Navigation/Header/HomeHeader";
import Home from "./components/Home/Home";
import Contact from "./components/Home/Contact";
import Admin from "./components/Admin/Admin";
import MessageList from "./components/Admin/Message/MessageList";
import MessageDetails from "./components/Admin/Message/MessageDetails";
import ProjectForm from "./components/Project/Forms/ProjectForm";
import ProjectDetails from "./components/Project/ProjectDetails";
import Footer from "./components/Navigation/Footer";

import "./App.css";

const App = ({ getAllLanguages, getAllProjects }) => {
  useEffect(() => {
    getAllLanguages();
    getAllProjects();
  }, []);

  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/admin" component={Admin} />
          <Route path="/createProject" component={ProjectForm} />
          <Route path="/editProject/:id" component={ProjectForm} />
          <Route path="/contact" component={Contact} />
          <Route path="/messages" component={MessageList} />
          <Route path="/message/:id" component={MessageDetails} />
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
