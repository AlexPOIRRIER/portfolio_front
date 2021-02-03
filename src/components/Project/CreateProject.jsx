import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import AdminButtons from "../Admin/AdminButtons";
import NewLanguageForm from "../Admin/NewLanguageForm";

import "../../css/Project/CreateProject.css";

const CreateProject = ({ projects, languages, match }) => {
  const editId = match.params.id;
  const [currentProject, setCurrentProject] = useState({});
  const [toggleEdit, setToggleEdit] = useState(false);
  const [projectData, setProjectData] = useState({
    name: "",
    link: "",
    duration: "",
  });
  const [languageData, setLanguageData] = useState([]);
  const [clientData, setClientData] = useState({ name: "" });

  const handleProjectChange = (event) => {
    setProjectData({ ...projectData, [event.target.id]: event.target.value });
  };

  const handleLanguageChange = (event) => {
    event.target.checked
      ? setLanguageData([...languageData, event.target.id])
      : setLanguageData(
          languageData.filter((lang) => lang !== event.target.id)
        );
  };
  const handleClientChange = (event) => {
    setClientData({ name: event.target.value });
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
  };

  useEffect(() => {
    if (currentProject) {
      setToggleEdit(true);
      setCurrentProject(
        projects.filter((project) => project.project_id === +editId)[0]
      );
    } else {
      setToggleEdit(false);
      setCurrentProject(null);
    }
  }, [currentProject]);
  console.log(currentProject);
  return (
    <div className="admin_page_container">
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
              value={projectData.name}
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
              value={projectData.link}
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
              value={projectData.duration}
              onChange={handleProjectChange}
            />
            <select>
              <option value="jours">jours</option>
              <option value="mois">mois</option>
              <option value="années">années</option>
            </select>
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
              value={clientData.name}
              onChange={handleClientChange}
            />
          </label>
        </div>
      </form>
      <button type="button" className="admin_btn" onClick={handleSubmit}>
        Confirmer
      </button>
    </div>
  );
};

const mapStateToProps = ({ languages, projects }) => ({
  languages,
  projects,
});

export default connect(mapStateToProps, null)(CreateProject);
