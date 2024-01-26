import React from "react";

import AssetValidate from "./../../assets/misc/row.svg";

import "./admin_right_bar.css";
import MarketNews from "../shared/market_news/MarketNews";
import TopMovers from "../shared/top_movers/TopMovers";
import QuickActions from "../shared/quick_actions/QuickActions";

function AdminRightBar() {
  return (
    <div className="sidebar-container">
      <MarketNews />
      <TopMovers />
      <QuickActions />
      <img
        src={AssetValidate}
        alt="Asset Validate"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}

export default AdminRightBar;
