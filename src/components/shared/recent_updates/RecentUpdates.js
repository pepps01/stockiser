import React from "react";
import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";


const RecentUpdates = () => {
  return (
      <div
        style={{
          maxWidth: "300px",
          width: "100%",
          height: "100vh",
          background: "#FFF",
          boxShadow: "3px 2px 3px #E5E7EB",
          flexDirection: "column",
          alignContent: "center",
          padding: "0rem 1.5rem",
          // zIndex: 2,
        }}
      >
        {/* Top Movers*/}
        <div>
          <MarketNews />
          <TopMovers />
          <QuickActions />
          <img
            src={AssetValidate}
            alt="Asset Validate"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
  );
};

export default RecentUpdates;
