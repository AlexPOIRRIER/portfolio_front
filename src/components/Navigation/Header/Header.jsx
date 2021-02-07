import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import SocialMedia from "../../_reusable/SocialMedia";

import "../../../css/Navigation/Header/Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <Title />
      <Link to="/contact" className="admin_btn">
        Contact
      </Link>
      <Link to="/messages" className="admin_btn">
        Messages
      </Link>
      <Link to="/admin" className="admin_btn">
        ADMIN
      </Link>
      <SocialMedia />
    </header>
  );
};

export default Header;
