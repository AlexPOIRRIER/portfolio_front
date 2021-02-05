import React from "react";
import { connect } from "react-redux";

import { setPopUp } from "../redux/actions/popupActions";

import PopUp from "./_reusable/PopUp";

import "../css/Contact.css";

const Contact = ({ popUp, setPopUp }) => {
  const handleSubmit = () => {
    console.log("ok");
  };
  return (
    <form className="contact_form">
      <label htmlFor="name" className="form_label">
        Nom :
        <input
          type="text"
          name="name"
          className="form_input"
          placeholder="Votre nom"
        />
      </label>
      <label htmlFor="email" className="form_label">
        Sujet :
        <input
          type="email"
          name="email"
          className="form_input"
          placeholder="Votre adresse e-mail"
        />
      </label>
      <label htmlFor="subject" className="form_label">
        Sujet :
        <input
          type="text"
          name="subject"
          className="form_input"
          placeholder="Sujet du message"
        />
      </label>
      <label htmlFor="message" className="form_label">
        Message :
        <textarea
          name="message"
          className="form_input"
          placeholder="Votre message ..."
          style={{ height: "12rem", width: "20rem", resize: "none" }}
        />
      </label>
      <button type="button" className="form_btn" onClick={() => setPopUp(true)}>
        Envoyer
      </button>
      {popUp && (
        <PopUp text={"Confirmer l'envoi du message ?"} func={handleSubmit} />
      )}
    </form>
  );
};

const mapStateToProps = ({ popUp }) => ({
  popUp,
});

const mapDispatchToProps = (dispatch) => ({
  setPopUp: setPopUp(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
