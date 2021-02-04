import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import NewLanguageForm from "../Admin/NewLanguageForm";

import "../../css/Project/CreateProject.css";
import { Link, Redirect } from "react-router-dom";
import {
  getProjectLanguages,
  setProjectLanguages,
} from "../../redux/actions/joinLanguageProjectActions";

const CreateProject = ({
  projects,
  languages,
  match,
  getProjectLanguages,
  setProjectLanguages,
  projectLanguages,
}) => {
  const editId = +match.params.id;
  const [redirect, setRedirect] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  const [projectData, setProjectData] = useState({
    name: "",
    link: "",
    duration: "",
    background: "",
  });
  const [languageData, setLanguageData] = useState([]);
  const [clientData, setClientData] = useState({ name: "" });

  const handleProjectChange = (event) => {
    if (currentProject) {
      setCurrentProject({
        ...currentProject,
        [event.target.name]: event.target.value,
      });
    } else {
      setProjectData({ ...projectData, [event.target.id]: event.target.value });
    }
  };

  const handleLanguageChange = (event) => {
    if (event.target.checked) {
      setProjectLanguages([
        ...projectLanguages,
        { id: +event.target.id, name: event.target.value },
      ]);
    } else {
      setProjectLanguages(
        projectLanguages.filter((lang) => lang.id !== +event.target.id)
      );
    }
  };

  const handleClientChange = (event) => {
    if (currentProject) {
      setCurrentProject({ ...currentProject, client_name: event.target.value });
    } else {
      setClientData({ name: event.target.value });
    }
  };

  const handleClear = () => {
    setCurrentProject(null);
    setProjectLanguages();
    setRedirect(true);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    if (currentProject) {
      const projectResult = await axios.put(
        `${process.env.REACT_APP_API}/projects/${editId}`,
        {
          name: currentProject.project_name,
          link: currentProject.project_link,
          duration: currentProject.project_duration,
          background: currentProject.background,
        }
      );
      // const dataProject = projectResult.data;
      const reset = await axios.delete(
        `${process.env.REACT_APP_API}/jlp/project/${editId}`
      );
      if (reset.status === 200) {
        projectLanguages.map((lang) =>
          axios.post(`${process.env.REACT_APP_API}/jlp`, {
            id_language: lang.id,
            id_project: editId,
          })
        );
      }
      const clientResult = await axios.put(
        `${process.env.REACT_APP_API}/clients/${currentProject.client_id}`,
        { name: currentProject.client_name }
      );
      // const dataClient = clientResult.data;
    }
    setCurrentProject(null);
    setProjectLanguages();
    setRedirect(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const projectResult = await axios.post(
      `${process.env.REACT_APP_API}/projects`,
      projectData
    );
    const dataProject = projectResult.data;
    projectLanguages.map((lang) =>
      axios.post(`${process.env.REACT_APP_API}/jlp`, {
        id_language: lang.id,
        id_project: dataProject.id,
      })
    );
    const clientResult = await axios.post(
      `${process.env.REACT_APP_API}/clients`,
      clientData
    );
    const dataClient = clientResult.data;

    if (dataProject.id !== null && dataClient.id !== null) {
      axios.post(`${process.env.REACT_APP_API}/jcp`, {
        id_project: dataProject.id,
        id_client: dataClient.id,
      });
    }
    setCurrentProject(null);
    setProjectLanguages();
    setRedirect(true);
  };

  useEffect(() => {
    if (editId) {
      setCurrentProject(
        projects.filter((project) => project.project_id === editId)[0]
      );
      getProjectLanguages(editId);
    } else {
      setCurrentProject(null);
    }
  }, [editId]);

  console.log(projectLanguages);
  return (
    <div className="admin_page_container">
      <h2>{editId ? "Modifier un projet" : "Créer un projet"}</h2>
      <form className="form_container">
        <div
          className="project_form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3 className="form_subtitle">Projet :</h3>
          <label htmlFor="project_name" className="form_label">
            Nom du projet :
            <input
              type="text"
              id="name"
              name="project_name"
              className="form_input"
              value={
                currentProject ? currentProject.project_name : projectData.name
              }
              onChange={handleProjectChange}
            />
          </label>
          <label htmlFor="project_link" className="form_label">
            Lien vers le projet :
            <input
              type="text"
              id="link"
              name="project_link"
              className="form_input"
              value={
                currentProject ? currentProject.project_link : projectData.link
              }
              onChange={handleProjectChange}
            />
          </label>
          <label htmlFor="project_duration" className="form_label">
            Durée du développement :
            <input
              type="text"
              id="duration"
              name="project_duration"
              className="form_input"
              value={
                currentProject
                  ? currentProject.project_duration
                  : projectData.duration
              }
              onChange={handleProjectChange}
            />
          </label>
          <label htmlFor="background" className="form_label">
            Image de couverture :
            <input
              type="text"
              id="background"
              name="background"
              className="form_input"
              value={
                currentProject
                  ? currentProject.background
                  : projectData.background
              }
              onChange={handleProjectChange}
            />
          </label>
        </div>
        <div className="language_form">
          <h3 className="form_subtitle">Technologies utilisées :</h3>
          {languages.map((lang) => (
            <label htmlFor="project_language" className="checkbox_label">
              <input
                type="checkbox"
                name="project_language"
                id={lang.id}
                value={lang.name}
                checked={projectLanguages.find((e) => e.id === +lang.id)}
                onChange={handleLanguageChange}
              />
              <span>{lang.name}</span>
            </label>
          ))}
          <NewLanguageForm />
        </div>
        <div className="client_form">
          <h3 className="form_subtitle">Client :</h3>
          <label htmlFor="project_client" className="form_label">
            Client :
            <input
              type="text"
              name="project_client"
              className="form_input"
              value={
                currentProject ? currentProject.client_name : clientData.name
              }
              onChange={handleClientChange}
            />
          </label>
        </div>
      </form>
      <div className="form_btn_container">
        {currentProject ? (
          <button type="button" className="form_btn" onClick={handleEditSubmit}>
            Confirmer
          </button>
        ) : (
          <button type="button" className="form_btn" onClick={handleSubmit}>
            Confirmer
          </button>
        )}
        <Link to="/admin" onClick={handleClear}>
          <button className="form_btn">Annuler</button>
        </Link>
        {redirect && <Redirect to="/admin" />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ languages, projects, projectLanguages }) => ({
  languages,
  projects,
  projectLanguages,
});

const mapDispatchToProps = (dispatch) => ({
  getProjectLanguages: getProjectLanguages(dispatch),
  setProjectLanguages: setProjectLanguages(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
