import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";

import Algizer from "./../../../assets/algizer.jpeg";
import buy from "./buy.json";
import Sidebar from "../../../components/shared/sidebar";
import UBA from "./../../../assets/logos/uba.svg";
import MyChart from "../../../components/atom/chart/MyChart";

function StockView() {
  const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const [purchaseStatus, setPurchaseStatus] = useState({
    name: "Buy",
    color: "#3DA900",
  });

  const handleBuy = () => {
    alert("Stock Purchase for  $13.90 has been added to Buy List");
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "100%",
          background: "#FFF",
          boxShadow: "3px 1px 3px #E5E7EB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.3rem .2rem",
        }}
      >
        <img src={Algizer} alt="Algizer" width={250} height={250} />

        <div
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        >
          <img src="" alt="Profile" />
        </div>
      </div>
      {/* <h1>{title}</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignContent: "center",
          background: "#F9FAFB",
        }}
      >
        {/* take into consideration the @meedia queries */}
        <Sidebar />
        <div
          className="main"
          style={{
            width: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            background: "#FBFCFD",
          }}
        >
          {/* Navabar */}
          <button
            onClick={() => navigate(-1)}
            style={{
              width: "9%",
              // background: "#3DA900",
              border: "1px solid #3DA900",
              padding: ".8rem 0rem",
              color: "black",
              opacity: ".6",
              borderRadius: "5px",
            }}
          >
            Go back
          </button>

          {/* Another level */}

          <div
            className=""
            style={{
              width: "97.5%",
              background: "#FFF",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "0rem",
              paddingRight: "2rem",
              boxShadow: "1px 1px 1px #E5E7EB",
              zIndex: "3px",
              borderRadius: "6px",
            }}
          >
            {/* TODO: Isolate to a different container */}
            {/* search area  */}

            <h4
              style={{
                visibility: "hidden",
              }}
            >
              Top 5 to Buy
            </h4>
            {/* Navabar */}
            <button
              onClick={handleBuy}
              style={{
                width: "9%",
                background: `${purchaseStatus.color}`,
                border: "none",
                padding: ".8rem 0rem",
                color: "#FFF",
              }}
            >
              {purchaseStatus.name}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              marginTop: "5rem",
            }}
          >
            <div
              className="left"
              style={{
                textAlign: "left",
                width: "50%",
              }}
            >
              <img
                src={UBA}
                alt="UBA"
                width={150}
                height={100}
                style={{
                  alignSelf: "center",
                  margin:"auto"
                }}
              />
              <h3>$13.90</h3>
              <p
                style={{
                  color: "red",
                }}
              >
                0.12 (0.36%)
              </p>
              <div>
                <h4>About</h4>
                <p>
                  United Bank for Africa Plc (the Bank) is a Nigeria-based
                  pan-African financial services institution. The Bank operates
                  in 20 African countries, including Republique du Benin ...
                </p>
              </div>
              <div>
                <h4>Suggested Indicators</h4>
                <p>
                  United Bank for Africa Plc (the Bank) is a Nigeria-based
                  pan-African financial services institution. The Bank operates
                  in 20 African countries, including Republique du Benin ..
                </p>
              </div>
            </div>
            <div
              className="right"
              style={{
                width: "45%",
                marginLeft: "5%",
              }}
            >
              <MyChart />
            </div>
          </div>

          <div
            className=""
            style={{
              padding: "1rem 0rem",
            }}
          >
            {/* container table for the application */}
            {/* check if data is available  */}
          </div>
        </div>
        {/* Action bar */}
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
      </div>
    </div>
  );
}

export default StockView;
