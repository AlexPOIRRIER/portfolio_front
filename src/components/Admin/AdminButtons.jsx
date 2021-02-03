import React from "react";
import { NavLink } from "react-router-dom";

import "../../css/Admin/AdminButtons.css";

const AdminButtons = () => {
  return (
    <div className="admin_btn_container">
      <NavLink to="/manageProject" className="admin_btn">
        MANAGE
      </NavLink>
      <NavLink to="/createProject" className="admin_btn">
        CREATE
      </NavLink>
    </div>
  );
};

export default AdminButtons;
