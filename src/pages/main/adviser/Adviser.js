import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/shared/sidebar";
import { Link, useNavigate } from "react-router-dom";
import AppNavbar from "../../../components/shared/navbar/Navbar";

import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";

import ReactModal from "react-modal";

import Algizer from "./../../../assets/algizer.jpeg";
import TableSignals from "../../../components/shared/table/TableSignals";
import { BASEURL } from "../../../apis/api";

const Adviser = () => {
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleClickParameter = (e) => {
    e.preventDefault();
  };
  const navigatePage = (e) => {
    e.preventDefault();
    navigate("/ticker");
  };

  const getData = async() => {
    await fetch(`${BASEURL}/api/advisers`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* navbar */}
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
      {/* navigation */}
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
          <AppNavbar title="Tickers" />

          {/* Another level */}
          <div
            className=""
            style={{
              width: "95.5%",
              background: "#FFF",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              boxShadow: "3px 1px 3px #E5E7EB",
              zIndex: "3px",
              borderRadius: "6px",
            }}
          >
            {/* TODO: Isolate to a different container */}
            {/* search area  */}

            <button
              style={{
                background: "green",
                padding: "10px 20px",
                border: "none",
                color: "#FFF",
              }}
              onClick={handleOpenClick}
            >
              {/* lift a modal experience to show the growth, value and economy stock */}
              Run
            </button>

            <button
              style={{
                padding: "10px 20px",
                border: "1px solid green",
                borderRadius: "5px",
                color: "green",
              }}
              onClick={navigatePage}
            >
              {/* lift a modal experience to show the growth, value and economy stock */}
              Add Ticker
            </button>
          </div>
          <div
            className=""
            style={{
              padding: "1rem 0rem",
            }}
          >
            {/* container table for the application */}
            {/* check if data is available  */}
            {isData ? <TableSignals /> : "Data is not available"}
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
        <ReactModal isOpen={modal}>
          <button onClick={handleClick}>Close Modal</button>
          <div>
            <h2>Run Intervals</h2>
            <div>
              <label>15 minutes</label>
              <input type="radio" name="15" />
            </div>
            <div>
              <label>30 minutes</label>
              <input type="radio" name="30" />
            </div>
            <div>
              <label>45 minutes</label>
              <input type="radio" name="45" />
            </div>
            <div>
              <label>1 hour</label>
              <input type="radio" name="1" />
            </div>
            {/* <button onClick={handleClickParameter}>Estimate Parameter</button> */}
            <Link
              to={{ pathname: "/estimate" }}
              style={{
                textDecoration: "none",
                padding: ".4rem 1rem",
                background: "#E5E7EB",
              }}
            >
              Select
            </Link>
          </div>
        </ReactModal>
      </div>
    </div>
  );
};

export default Adviser;
