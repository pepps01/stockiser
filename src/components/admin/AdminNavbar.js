import React from "react";

import Algizer from "./../../assets/algizer.svg";
import UserAvatar from "./../../assets/user.png";

import "./admin_navbar.css";

const AdminNavbar = () => {
  const handleClick = () => {
    console.log("Clicking...");
  };
  return (
    <nav className="nav-controller">
      <div className="nav-brand">
        <img src={Algizer} alt="algizer" className="nav-icon" />
      </div>
      <div className="profile-badge">
        <img src={UserAvatar} alt="editProfile" />
        <div className="profile-icon" onClick={handleClick}></div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
