import React from "react";
import { NavLink } from "react-router-dom";

import "../../css/Admin/AdminButtons.css";

const AdminButtons = () => {
  return (
    <div className="admin_btn_container">
      <NavLink to="/admin" className="admin_btn" activeClassName="actived">
        MANAGE
      </NavLink>
      <NavLink
        to="/createProject"
        className="admin_btn"
        activeClassName="actived"
      >
        CREATE
      </NavLink>
    </div>
  );
};

export default AdminButtons;
