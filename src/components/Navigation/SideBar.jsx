import React from "react";

import "../../css/Navigation/SideBar.css"; 

const SideBar = () => {
  return (
    <nav className="side_bar_container">
      <div className="side_bar_btn">Informations personelles</div>
      <div className="side_bar_btn">Gérer les projets</div>
      <div className="side_bar_btn">Ajouter un nouveau projet :</div>
    </nav>
  );
};

export default SideBar;
