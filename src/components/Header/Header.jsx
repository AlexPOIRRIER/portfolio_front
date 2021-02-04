import React, { useEffect } from "react";
import Title from "./Title";
import SocialMedia from "./SocialMedia";

import "../../css/Header/Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <Title />
      <SocialMedia />
    </header>
  );
};

export default Header;
