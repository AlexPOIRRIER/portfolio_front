import React from "react";

import Header from "../Header/Header";
import AdminButtons from "./AdminButtons";

import "../../css/Admin/Admin.css";

const Admin = () => {
  return (
    <>
      <Header />
      <section className="admin_page_container">
        <AdminButtons />
      </section>
    </>
  );
};

export default Admin;
