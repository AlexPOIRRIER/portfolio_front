import React from "react";
import Title from "./Title";
import SocialMedia from "./SocialMedia";
import AdminButtons from '../Admin/AdminButtons'

import "../../css/Header/Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <Title />
      <AdminButtons />
      <SocialMedia />
    </header>
  );
};

export default Header;
