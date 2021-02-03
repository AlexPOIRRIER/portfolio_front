import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

import { addLanguage } from "../../redux/actions/languageActions";

const NewLanguageForm = ({ addLanguage, language }) => {
  const [toggle, setToggle] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");

  const handleNewLanguage = (event) => {
    setNewLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post(`${process.env.REACT_APP_API}/languages`, {
      name: newLanguage,
    });
    const { data } = result;
    if (data) {
      addLanguage(data);
      setToggle(false);
    }
  };

  return (
    <div className="new_language_container">
      <button type="button" onClick={() => setToggle(!toggle)}>
        Ajouter une nouveau langage
      </button>
      {toggle && (
        <label htmlFor="new_language" className="form_label">
          Langage :
          <input
            type="text"
            name="new_language"
            className="form_input"
            value={newLanguage}
            onChange={handleNewLanguage}
          />
        </label>
      )}
      <button type="button" onClick={handleSubmit}>
        ok
      </button>
    </div>
  );
};

const mapStateToProps = ({ language }) => ({
  language,
});

const mapDispatchToProps = (dispatch) => ({
  addLanguage: addLanguage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewLanguageForm);
