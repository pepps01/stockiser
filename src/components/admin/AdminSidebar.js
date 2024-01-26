import React from "react";

import DashboardGrey from "./../../assets/page_logos/dashboard/dashboard-grey.svg";
import Selector from "./../../assets/page_logos/stock/stock-grey.svg";
import OptimiserGrey from "./../../assets/page_logos/optimiser/optimiser-grey.svg";
import AdviserGrey from "./../../assets/page_logos/adviser/adviser-grey.svg";
import HelpGrey from "./../../assets/page_logos/help/help-grey.svg";
import LogoutGrey from "./../../assets/page_logos/logout/logout-grey.svg";

import "./admin_sidebar.css";
import { useNavigate } from "react-router-dom";
function AdminSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar">
        <ul className="">
          <li>
            <img src={DashboardGrey} alt="stock options" />
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <img src={Selector} alt="stock options" />
            <a href="/selector">Selector</a>
          </li>
          <li>
            <img src={OptimiserGrey} alt="Optimiser Grey" />
            <a href="/optimiser">Optimiser</a>
          </li>
          <li>
            <img src={AdviserGrey} alt="Adviser" />
            <a href="/adviser">Adviser</a>
          </li>
          <li>
            <img src={HelpGrey} alt="Help" />
            <a href="/help">Help</a>
          </li>
          <li onClick={handleLogout}>
            <img src={LogoutGrey} alt="Logout" />
            <a href="/login">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
