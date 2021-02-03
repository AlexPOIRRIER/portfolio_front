import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  const title = "PORTFOLIO";

  return (
    <div className="title_container">
      <Link to="/">
        <h1 className="title">{title}</h1>
      </Link>
    </div>
  );
};

export default Title;
