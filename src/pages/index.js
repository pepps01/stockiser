import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Splash from "./auth/Splash";
import Optimiser from "./main/optimiser/Optimiser";
import Adviser from "./main/adviser/Adviser";
import Selector from "./main/selector/Selector";
import SelectorView from "./main/selector/SelectorView";
import Dashboard from "./main/dashboard/Dashboard";
import Asset from "./main/asset/Asset";
import SingleOptimiser from "./main/optimiser/SingleOptimiser";
import Ticker from "./main/adviser/Ticker";
import Profile from "./main/profile/Profile";
import ValueStock from "./main/stock/ValueStock";
import Help from "./main/help/Help";
import Ranger from "./main/selector/Ranger";
import ParameterEstimate from "./main/optimiser/ParameterEstimate";
import ResetPassword from "./auth/ResetPassword";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/optimiser" element={<Optimiser />} />
        <Route path="/adviser" element={<Adviser />} />
        <Route path="/help" element={<Help />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/parameter-estimate" element={<ParameterEstimate />} />
        <Route path="/value-stock" element={<ValueStock />} />

        <Route path="/selector" element={<Selector />} />
        <Route path="/selector/:selector_id" element={<SelectorView />} />

        <Route path="/estimate" element={<SingleOptimiser />} />
        <Route path="/ranger" element={<Ranger />} />
        {/* <Route path="/optimise/" element={<SingleStock />} /> */}
        <Route path="/ticker" element={<Ticker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
