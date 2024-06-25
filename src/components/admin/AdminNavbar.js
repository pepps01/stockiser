import React from "react";
import { useNavigate } from "react-router-dom";

import Algizer from "./../../assets/algizer.jpeg";
import UserAvatar from "./../../assets/user.png";

import "./admin_navbar.css";


const AdminNavbar = () => {
  const navigate= useNavigate()
  const handleClick = () => {
    console.log("Clicking...");
  };
  const navigateClick =()=>{
    console.log("cliker")
    navigate('/profile')
  }
  return (
    <nav className="nav-controller">
      <div className="nav-brand">
        <img src={Algizer} alt="algizer" className="nav-icon" width={250} height={250} />
      </div>
      <div className="profile-badge" onClick={navigateClick}>
        <img src={UserAvatar} alt="editProfile" />
        <div className="profile-icon" onClick={handleClick}></div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
