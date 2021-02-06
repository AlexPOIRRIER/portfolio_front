import React from "react";
import { connect } from "react-redux";

import { setPopUp } from "../redux/actions/popupActions";
import { setPopUpFunction } from "../redux/actions/popupActions";

import PopUp from "./_reusable/PopUp";

import "../css/Contact.css";

const Contact = ({ popUp, setPopUp, setPopUpFunction }) => {
  const handleSubmit = () => {
    console.log("ok");
  };
  console.log(popUp);
  const handlePopUp = () => {
    setPopUp(true);
    setPopUpFunction(handleSubmit);
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
        E-mail :
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
      <button type="button" className="form_btn" onClick={handlePopUp}>
        Envoyer
      </button>
      {popUp.toggle && <PopUp text={"Confirmer l'envoi du message ?"} />}
    </form>
  );
};

const mapStateToProps = ({ popUp }) => ({
  popUp,
});

const mapDispatchToProps = (dispatch) => ({
  setPopUp: setPopUp(dispatch),
  setPopUpFunction: setPopUpFunction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
