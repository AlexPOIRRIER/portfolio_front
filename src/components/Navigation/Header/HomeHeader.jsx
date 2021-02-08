import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import SocialMedia from "../../_reusable/SocialMedia";

import "../../../css/Navigation/Header/Header.css";

const HomeHeader = () => {
  return (
    <header className="header_container">
      <Title />
      <Link to="/contact" className="admin_btn">
        Contact
      </Link>
      <SocialMedia />
    </header>
  );
};

export default HomeHeader;
