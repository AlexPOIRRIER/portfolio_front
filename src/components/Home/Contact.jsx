import React, { useState } from "react";
import { connect } from "react-redux";

import { setPopUp } from "../../redux/actions/popupActions";
import { setNewMessage } from "../../redux/actions/messageActions";

import Header from "../Navigation/Header/HomeHeader";
import PopUp from "../_reusable/PopUp";

import "../../css/Contact.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Contact = ({ newMessage, setNewMessage, popUp, setPopUp }) => {
  const [redirect, setRedirect] = useState();
  const handleSubmit = () => {
    axios.post(`${process.env.REACT_APP_API}/messages`, newMessage);
    setRedirect(true);
  };

  const handleChange = (event) => {
    setNewMessage({ ...newMessage, [event.target.name]: event.target.value });
    console.log(newMessage);
  };

  const handlePopUp = () => {
    setPopUp(true, handleSubmit);
  };

  return (
    <>
      <Header />
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
        <button type="button" className="form_btn" onClick={handlePopUp}>
          Envoyer
        </button>
        {popUp.toggle && <PopUp text={"Confirmer l'envoi du message ?"} />}
        {redirect && <Redirect to="/" />}
      </form>
    </>
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
