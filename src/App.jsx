import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getAllLanguages } from "./redux/actions/languageActions";
import { getAllProjects } from "./redux/actions/projectActions";

import Header from "./components/Navigation/Header/Header";
import Home from "./components/Home";
import Admin from "./components/Admin";
import ProjectForm from "./components/Project/Forms/ProjectForm";
import ProjectDetails from "./components/Project/ProjectDetails";
import Contact from "./components/Contact";
import MessageList from "./components/Message/MessageList";
import Footer from "./components/Navigation/Footer";

import "./App.css";
import MessageDetails from "./components/Message/MessageDetails";

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
