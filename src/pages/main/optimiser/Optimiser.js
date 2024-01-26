import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/shared/sidebar";

// local component
// import AppNavbar from "../../../components/shared/navbar/Navbar";
import AppNavbar from "../../../components/shared/navbar/Navbar";
import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";
import Table from "./../../../components/shared/table/Table";

import Algizer from "./../../../assets/algizer.svg";
import ReactModal from "react-modal";
import Accordion from "../../../components/shared/accordion/Accordion";
import TableView from "../../../components/shared/table/TableView";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../apis/api";
import CustomNavbar from "../../../components/shared/navbar/CustomNavbar";

const Optimiser = () => {
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const [formData, setFormData] = useState("");
  const [records, setRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      marginRight: '-30%',
      marginBottom: '-20%',
      transform: 'translate(-50%, -50%)',
      width:"40%",
      height:"50%"
    },
  };


  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = () => {
    setModal(true);
  };

  const handleClickParameter = (e) => {
    e.preventDefault();
  };

  const handleBuyClick = (records) => {
    // setSelectedRow(rowData);
    alert("The selected stock has been added to Buy List for $" + records.high);
  };

  const handleSellClick = (records) => {
    // setSelectedRow(rowData);
    alert(
      "The selected stock has been added to Sell list for $" + records.high
    );
  };

  const getData = async () => {
    await fetch(`${BASEURL}/api/optimisers`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.result);
        console.log("collect data",data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const columnites = [
    { name: "Ticker" },
    { name: "Open" },
    { name: "High" },
    { name: "Low" },
    { name: "Close" },
    { name: "Volume" },
    { name: "Date" },
    { name: "Action" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* navbar */}
      <CustomNavbar/>
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
          <AppNavbar title="Optimiser" />

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

            {/* Get Financials */}
            <div>
              {/* <button
                style={{
                  background: "green",
                  padding: "10px 20px",
                  border: "none",
                  color: "#FFF",
                }}
              >
                Estimate Parameters
              </button> */}
            </div>
          </div>
          <div>
            {/* seelings */}
            <table className="table table-spaced">
              <thead>
                <tr>
                  {columnites.map((columnite, index) => (
                    <th key={index}>{columnite.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index}>
                    <td>{record.ticker}</td>
                    <td>${record.open}</td>
                    <td>${record.high}</td>
                    <td>${record.low}</td>
                    <td>${record.close}</td>
                    <td>{record.volume}</td>
                    <td>{record.date}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <a href={record.action}></a>
                      <button
                        className="buttonFinancials"
                        style={{
                          padding: "7px 15px",
                          border: "none",
                          color: "white",
                          textAlign: "center",
                          textDecoration: "none",
                          // border: "2px solid orange",
                          borderRadius: "5px",
                          background: "green",
                          cursor: "pointer",
                        }}
                        onClick={() => handleOpenClick(record)}
                      >
                        Estimate Parameters
                      </button>
                    </td>
                  </tr>
                ))} 
              </tbody>
            </table>
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
        <ReactModal isOpen={modal} data={selectedRow} 
        style={customStyles}
        >
          <button onClick={handleClick}>Close Modal</button>
          <div
            style={
              {
                // display:"flex"
              }
            }
          >
            <div
              style={{
                padding: "10rem",
                width: "400px",
              }}
            >
              <div
                style={{
                  marginBottom: "10px",
                }}
              >
                <label for="stockastic">Stockastic</label>

                <select
                  name="stockastic"
                  id="stockastic"
                  style={{
                    display: "block",
                    padding: ".3rem",
                    width: "100%",
                    marginTop:".3rem",
                    height:"40px"
                  }}
                >
                  <option value="volvo">
                    Roll low (Upper Bound and Lower Bound)
                  </option>
                  <option value="saab">Roll High (Upper Bound and Lower Bound)</option>
                  <option value="mercedes">Fasts (Upper Bound and Lower Bound)</option>
                  <option value="audi">Low (Upper Bound and Lower Bound)</option>
                </select>
              </div>
              <div
                style={{
                  marginBottom: "10px",
                }}
              >
                <label for="convergent">
                  Moving Average Convergent and Divergent
                  {/* Moving Average Convergent x Divergent: */}
                  {/* Add tool tip */}
                </label>

                <select
                  name="convergent"
                  id="convergent"
                  style={{
                    display: "block",
                    padding: ".3rem",
                    width: "100%",
                    marginTop:".3rem",
                    height:"40px"

                  }}
                >
                  <option value="volvo">Fast (UxL) </option>
                  <option value="saab">Slow (Upper Bound and Lower Bound)</option>
                  <option value="mercedes">Smooth (Upper Bound and Lower Bound)</option>
                </select>
              </div>
              <div
                style={{
                  marginBottom: "10px",
                }}
              >
                <label for="strength">
                  Relative Strength Indicators
                </label>

                <select
                  name="strength"
                  id="strength"
                  style={{
                    display: "block",
                    padding: ".3rem",
                    width: "100%",
                    marginTop:".3rem",
                    height:"40px"

                  }}
                >
                  <option value="volvo">Overbought </option>
                  <option value="saab">Oversold</option>
                </select>
              </div>
              <a
                href="/estimate"
                style={{
                  background: "green",
                  textDecoration: "none",
                  color: "#fff",
                  padding: ".7rem .5rem",
                  borderRadius: "5px",
                  marginTop: "15px",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Estimate Parameter
              </a>
            </div>

            {/* <button onClick={handleClickParameter}>Estimate Parameter</button> */}
          </div>

          {/* <Link
            to={{ pathname: "/estimate" }}
            style={{
              textDecoration: "none",
              padding: ".4rem 1rem",
              background: "#E5E7EB",
            }}
          >
            Estimate Parameter
          </Link> */}
          
        </ReactModal>
      </div>
    </div>
  );
};

export default Optimiser;
