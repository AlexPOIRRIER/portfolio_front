import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import SocialMedia from "../../_reusable/SocialMedia";

import "../../../css/Navigation/Header/Header.css";

const AdminHeader = () => {
  return (
    <header className="header_container">
      <Title />
      <Link to="/messages" className="admin_btn">
        Messages
      </Link>
      <SocialMedia />
    </header>
  );
};

export default AdminHeader;
