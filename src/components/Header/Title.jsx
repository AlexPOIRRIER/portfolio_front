import React from "react";
import { Link } from "react-router-dom";

import "../../css/Header/Title.css";

const Title = () => {
  const title = "PORTFOLIO";

  return (
    <div className="main_title_container">
      <Link to="/">
        <h1 className="main_title">{title}</h1>
      </Link>
    </div>
  );
};

export default Title;
