import React from "react";
import { connect } from "react-redux";

import { setPopup } from "../../redux/actions/popupActions";

import "../../css/_reusable/ConfirmCancelButtons.css";
import { CancelIcon, ConfirmIcon } from "../../utils/svg";

const ConfirmCancelButtons = ({ popUp, setPopup }) => {
  const handleConfirm = async (event) => {
    event.preventDefault();
    await popUp.func();
    setPopup();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setPopup();
  };
  return (
    <div className="cc_btn_container">
      <button className="cc_btn confirm_btn" onClick={handleConfirm}>
        <ConfirmIcon cssClass="cc_icon" />
        Valider
      </button>
      <button className="cc_btn cancel_btn" onClick={handleCancel}>
        <CancelIcon cssClass="cc_icon" />
        Annuler
      </button>
    </div>
  );
};

const mapStateToProps = ({ popUp, newMessage }) => ({
  popUp,
  newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setPopup: setPopup(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmCancelButtons);
