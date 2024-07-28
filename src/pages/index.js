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
// import Ranger from "./main/selector/Ranger";
import ParameterEstimate from "./main/optimiser/ParameterEstimate";
import Transaction from "./main/Transaction/Transaction";
import ResetPassword from "./auth/ResetPassword";
import ForgotPassword from "./auth/ForgotPassword";
import VerifyCode from "./auth/VerifyCode";
import SendCode from "./auth/SendCode";
import HomePage from "./home/HomePage";
import Register from "./auth/Register";
import Dash from "./main/dashboard/Dash";
import Hang from "../components/main/Hang";
import Select from "./main/selector/Select";
import Counter from "./Counter";
import Stock from "./main/stock/Stock";

// sdfsd
function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Splash />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/hang" element={<Hang />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select" element={<Select />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/send-code" element={<SendCode />} />
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/optimiser" element={<Optimiser />} />
        <Route path="/adviser" element={<Adviser />} />
        <Route path="/help" element={<Help />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/parameter-estimate" element={<ParameterEstimate />} />
        <Route path="/value-stock" element={<ValueStock />} />
        <Route path="/value-stock" element={<ValueStock />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/select" element={<Select />} />

        <Route path="/selector" element={<Selector />} />
        <Route path="/selector/:selector_id" element={<SelectorView />} />

        <Route path="/estimate" element={<SingleOptimiser />} />
        {/* <Route path="/ranger" element={<Ranger />} /> */}
        {/* <Route path="/optimise/" element={<SingleStock />} /> */}
        <Route path="/ticker" element={<Ticker />} />

        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
