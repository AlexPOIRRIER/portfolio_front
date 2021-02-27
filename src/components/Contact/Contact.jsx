import React, { useState } from "react";
import { connect } from "react-redux";

import { setPopup } from "../../redux/actions/popupActions";
import { setNewMessage } from "../../redux/actions/messageActions";

import Popup from "../_reusable/Popup";

import axios from "axios";
import { Redirect } from "react-router-dom";

import "../../css/Contact/Contact.css";

const Contact = ({ newMessage, setNewMessage, popup, setPopup }) => {
	const [redirect, setRedirect] = useState();
	const handleSubmit = () => {
		axios.post(`${process.env.REACT_APP_API}/messages`, newMessage);
		setRedirect(true);
	};
	console.log(window.innerWidth);
	const handleChange = (event) => {
		setNewMessage({ ...newMessage, [event.target.name]: event.target.value });
		console.log(newMessage);
	};

	const handlePopup = () => {
		setPopup(true, handleSubmit);
	};

	return (
		<section className="contact_form_section" id="contact">
			<h3>Contact</h3>
			<form className="contact_form" onSubmit={handlePopup}>
				<label htmlFor="name" className="form_label">
					Nom :
					<input
						type="text"
						name="name"
						className="form_input"
						placeholder="Votre nom"
						value={newMessage.name}
						onChange={handleChange}
						required
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
						required
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
						required
					/>
				</label>
				<label htmlFor="message" className="form_label">
					Message :
					<textarea
						name="message"
						className="form_text_area"
						placeholder="Votre message ..."
						value={newMessage.message}
						onChange={handleChange}
						required
						// style={{ height: "12rem", width: "20rem", resize: "none" }}
					/>
				</label>
				<button type="submit" className="form_btn">
					Envoyer
				</button>
				{popup.toggle && <Popup text={"Confirmer l'envoi du message ?"} />}
				{redirect && <Redirect to="/" />}
			</form>
		</section>
	);
};

const mapStateToProps = ({ newMessage, popup }) => ({
	newMessage,
	popup,
});

const mapDispatchToProps = (dispatch) => ({
	setNewMessage: setNewMessage(dispatch),
	setPopup: setPopup(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
