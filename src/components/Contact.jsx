import React from "react";
import { connect } from "react-redux";

import { setPopUp } from "../redux/actions/popupActions";
import { setNewMessage } from "../redux/actions/messageActions";

import PopUp from "./_reusable/PopUp";

import "../css/Contact.css";
import axios from "axios";

const Contact = ({
  newMessage,
  setNewMessage,
  popUp,
  setPopUp,
  setPopUpFunction,
}) => {
  const handleSubmit = async () => {
    const result = await axios.post(
      `${process.env.REACT_APP_API}/messages`,
      newMessage
    );
    console.log(result);
  };
  const handleChange = (event) => {
    setNewMessage({ ...newMessage, [event.target.name]: event.target.value });
    console.log(newMessage);
  };

  const handlePopUp = () => {
    setPopUp(true, handleSubmit);
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
          value={newMessage.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email" className="form_label">
        E-mail :
        <input
          type="email"
          name="email"
          className="form_input"
          placeholder="Votre adresse e-mail"
          value={newMessage.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="subject" className="form_label">
        Sujet :
        <input
          type="text"
          name="subject"
          className="form_input"
          placeholder="Sujet du message"
          value={newMessage.subject}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message" className="form_label">
        Message :
        <textarea
          name="message"
          className="form_input"
          placeholder="Votre message ..."
          value={newMessage.message}
          onChange={handleChange}
          style={{ height: "12rem", width: "20rem", resize: "none" }}
        />
      </label>
      <button
        type="button"
        className="form_btn"
        onClick={() => setPopUp(true, handleSubmit)}
      >
        Envoyer
      </button>
      {popUp.toggle && <PopUp text={"Confirmer l'envoi du message ?"} />}
    </form>
  );
};

const mapStateToProps = ({ newMessage, popUp }) => ({
  newMessage,
  popUp,
});

const mapDispatchToProps = (dispatch) => ({
  setNewMessage: setNewMessage(dispatch),
  setPopUp: setPopUp(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
