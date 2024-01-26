import React from "react";

import "./admin_main.css";
import AppNavbar from "../shared/navbar/Navbar";
function AdminMain() {
  return (
    <div
      className="main-container"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "0px 1rem",
      }}
    >
      <AppNavbar title="Dashboard" />
      <div
        className="main"
        style={{
          width: "100%",
        }}
      ></div>
    </div>
  );
}

export default AdminMain;
