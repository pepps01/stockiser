import React from "react";
import MarketNews from "../market_news/MarketNews";
import TopMovers from "../top_movers/TopMovers";
import QuickActions from "../quick_actions/QuickActions";
import AssetValidate from "./../../../assets/misc/row.svg";

function NewsBar() {
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

export default NewsBar;
