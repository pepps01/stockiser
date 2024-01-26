import React from "react";

import AdminNavbar from "./AdminNavbar";

import "./admin.css";
import AdminSidebar from "./AdminSidebar";
import AdminMain from "./AdminMain";
import AdminRightBar from "./AdminRightBar";

const Admin = () => {
  return (
    <div className="page-controller">
      <AdminNavbar />
      <div className="body-controller">
        <AdminSidebar /> 
        <AdminMain /> 
        <div className="right-bar-controller">
          <AdminRightBar />
        </div>
      </div>
    </div>
  );
};

export default Admin;


// Creat new Hooks 