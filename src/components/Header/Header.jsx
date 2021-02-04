import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import SocialMedia from "./SocialMedia";

import "../../css/Header/Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <Title />
      {/* <SocialMedia /> */}
      <Link to="/admin" className="admin_btn">
        ADMIN
      </Link>
    </header>
  );
};

export default Header;
