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
import Stock from "./main/stock/Stock";
import SingleOptimiser from "./main/optimiser/SingleOptimiser";
import Ticker from "./main/adviser/Ticker";
import StockView from "./main/stock/StockView";
import SellView from "./main/stock/SellView";
import Profile from "./main/profile/Profile";
import ValueStock from "./main/stock/ValueStock";
import GrowthStock from "./main/stock/GrowthStock";
import EquityStock from "./main/stock/EquityStock";
import Help from "./main/help/Help";
import Test from "./main/test/Test";
import Ranger from "./main/selector/Ranger";
import Invearn from "./main/selector/Invearn";
import ParameterEstimate from "./main/optimiser/ParameterEstimate";
// import EquityStock from "./main/stock/SingleStock";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/optimiser" element={<Optimiser />} />
        <Route path="/adviser" element={<Adviser />} />
        <Route path="/help" element={<Help />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/parameter-estimate" element={<ParameterEstimate />} />
        <Route path="/sellview" element={<SellView />} />
        <Route path="/stock/:stock_id" element={<Stock />} />
        <Route path="/value-stock" element={<ValueStock />} />
        <Route path="/growth-stock/:stock_id" element={<GrowthStock />} />
        <Route path="/economy-stock/:stock_id" element={<EquityStock />} />
        <Route path="/stockview/:stock_view_id" element={<StockView />} />

        <Route path="/selector" element={<Selector />} />
        <Route path="/selector/:selector_id" element={<SelectorView />} />

        <Route path="/estimate" element={<SingleOptimiser />} />
        <Route path="/ranger" element={<Ranger />} />
        <Route path="/invearn" element={<Invearn />} />
        {/* <Route path="/optimise/" element={<SingleStock />} /> */}
        <Route path="/ticker" element={<Ticker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
