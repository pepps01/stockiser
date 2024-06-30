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

import './adviser.css'

const Adviser = () => {
  const [modal, setModal] = useState(false);
  // const [isData, setIsData] = useState(true);
  const isData = true
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);
  // const [formData, setFormData] = useState("");

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

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      marginRight: "-30%",
      marginBottom: "-20%",
      transform: "translate(-50%, -50%)",
      width: "15%",
      height: "30%",
    },
    
  };

  // const getData = async() => {
  //   await fetch(`${BASEURL}/api/advisers`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         console.log(data)
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleSearch =(e)=>{
    e.preventDefault()
  }

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
          <AppNavbar title="Advisers" />

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
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                style={{
                  width: "30%",
                  height:"4vh"
                }}
              />


              <div className="" style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}>

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
                  marginLeft:".5rem"
                }}
                onClick={navigatePage}
              >
                {/* lift a modal experience to show the growth, value and economy stock */}
                Add Ticker
              </button>
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
        <ReactModal isOpen={modal} style={customStyles}>
          <div className="" style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
            <h2>Run Intervals</h2>
            <button onClick={handleClick}>Close Modal</button>
          </div>
          <div style={{
            width:"100%"
          }}>
      
            <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
              <h3 style={{width:"60%"}}>15 minutes</h3>
              <input type="radio" name="15" />
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}> 
              <h4 style={{width:"60%"}}>30 minutes</h4>
              <input type="radio" name="30" />
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
              <h4 style={{width:"60%"}}>45 minutes</h4>
              <input type="radio" name="45" />
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
              <h4 style={{width:"60%"}}>1 hour</h4>
              <input type="radio" name="1" />
            </div>
            <Link
              to={{ pathname: "/advise" }}
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
