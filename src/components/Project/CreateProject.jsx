import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import NewLanguageForm from "../Admin/NewLanguageForm";

import "../../css/Project/CreateProject.css";
import { Link, Redirect } from "react-router-dom";
import { addProject, getAllProjects } from "../../redux/actions/projectActions";

const CreateProject = ({ projects, languages, match, getAllProjects }) => {
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
    event.target.checked
      ? setLanguageData([...languageData, event.target.id])
      : setLanguageData(
          languageData.filter((lang) => lang !== event.target.id)
        );
  };
  const handleClientChange = (event) => {
    if (currentProject) {
      setCurrentProject({ ...currentProject, client_name: event.target.value });
    } else {
      setClientData({ name: event.target.value });
    }
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
      const dataProject = projectResult.data;
      console.log(dataProject);
      // languageData.map((lang) =>
      //   axios.put(`${process.env.REACT_APP_API}/jlp`, {
      //     id_language: +lang,
      //     id_project: dataProject.id,
      //   })
      // );
      const clientResult = await axios.put(
        `${process.env.REACT_APP_API}/clients/${currentProject.client_id}`,
        { name: currentProject.client_name }
      );
      const dataClient = clientResult.data;
      console.log(dataClient);
    }
    setRedirect(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const projectResult = await axios.post(
      `${process.env.REACT_APP_API}/projects`,
      projectData
    );
    const dataProject = projectResult.data;
    languageData.map((lang) =>
      axios.post(`${process.env.REACT_APP_API}/jlp`, {
        id_language: +lang,
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
    setRedirect(true);
  };

  useEffect(() => {
    if (editId) {
      setCurrentProject(
        projects.filter((project) => project.project_id === +editId)[0]
      );
    } else {
      setCurrentProject(null);
    }
  }, [editId]);
  editId && console.log(editId);
  return (
    <div className="admin_page_container">
      {/* <AdminButtons /> */}
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
            {/* <select>
              <option value="jours">jours</option>
              <option value="mois">mois</option>
              <option value="années">années</option>
            </select> */}
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
          {languages &&
            languages.map((lang) => (
              <label htmlFor="project_language" className="checkbox_label">
                <input
                  type="checkbox"
                  name="project_language"
                  id={lang.id}
                  onClick={handleLanguageChange}
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
      {currentProject ? (
        <button type="button" className="admin_btn" onClick={handleEditSubmit}>
          Confirmer
        </button>
      ) : (
        <button type="button" className="admin_btn" onClick={handleSubmit}>
          Confirmer
        </button>
      )}
      <Link
        to="/admin"
        className="admin_btn"
        onClick={() => setCurrentProject(null)}
      >
        Annuler
      </Link>
      {redirect && <Redirect to="/admin" />}
    </div>
  );
};

const mapStateToProps = ({ languages, projects }) => ({
  languages,
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: getAllProjects(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
