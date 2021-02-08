import React from "react";
import { Link } from "react-router-dom";

import "../../css/Navigation/Footer.css";

const Footer = () => {
  return (
    <footer className="footer_container">
      <p>Copyright to myself</p>
      <Link to="/admin" className="admin_btn">
        ADMIN
      </Link>
    </footer>
  );
};

export default Footer;
