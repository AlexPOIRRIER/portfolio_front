import React from "react";

import ConfirmCancelButtons from "./ConfirmCancelButtons";

import "../../css/_reusable/PopUp.css";

const PopUp = ({ text, func }) => {
  return (
    <div className="popup_container">
      <div className="popup">
        <div className="popup_content">
          {text}
          <ConfirmCancelButtons func={func} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
