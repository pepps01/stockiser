import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AppNavbar from "../../../components/shared/navbar/Navbar";
import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";

import Algizer from "./../../../assets/algizer.jpeg";
import buy from "./buy.json";
import sell from "./sell.json";
import Sidebar from "../../../components/shared/sidebar";
import { BASEURL } from "../../../apis/api";
import CustomNavbar from "../../../components/shared/navbar/CustomNavbar";

function EquityStock() {
  
  const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const [records, setRecords] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [sell_records, setSellRecords] = useState([]);
  const [formData, setFormData] = useState();
  const token = localStorage.getItem('token')

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
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


  const columnites = [
    { name: "Ticker" },
    { name: "Open" },
    { name: "High" },
    { name: "Low" },
    { name: "Close" },
    { name: "Volume" },
    { name: "Action" },
  ];

  // const loadData = () => {
  //   fetch(`${BASEURL}/api/selector/stocks`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecords({ records: data });
  //       console.log("data records", data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const loadFormData = () => {
    fetch(`${BASEURL}/api/selector/get-equity-stock`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setRecords({ records: data });
        // setRecords(data.result);
        setStockData(data.result)
        console.log("data records", data);
      })
      .catch((err) => console.log(err));
  };

  // get buy stock
  const getData = async () => {
    await fetch(`${BASEURL}/api/selector/get-equity-sell-stock`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        "Access-Control-Allow-Origin":"*"
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSellRecords(data.result)
        console.log("data records", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };


  useEffect(() => {
    loadFormData();
    getData()
  }, []);

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomNavbar/>
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
              border: "1px solid #3DA900",
              padding: ".8rem 0rem",
              borderRadius: "4px",
              color: "green",
            }}
          >
            Go back
          </button>

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
              paddingLeft: "1rem",
              paddingRight: "2rem",
              boxShadow: "3px 1px 3px #E5E7EB",
              zIndex: "3px",
              borderRadius: "6px",
            }}
          >
            {/* TODO: Isolate to a different container */}
            {/* search area  */}

            <h3>Equity Stock</h3>
          </div>
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

            <h4>Top 5 to Buy</h4>
          </div>
          <div>
            <table className="table table-spaced" style={{width:"100%"}}>
              <thead>
                <tr>
                  {columnites.map((columnite, index) => (
                    <th key={index}>{columnite.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stockData &&
                  Object.keys(stockData).map((ticker, index ) => (
                      <tr key={index}>
                              <td>{stockData[ticker][0]?.ticker}</td>
                              <td>${Number(stockData[ticker][0]?.open).toFixed(2)}</td>
                              <td>${Number(stockData[ticker][0]?.high).toFixed(2)}</td>
                              <td>${Number(stockData[ticker][0]?.low).toFixed(2)}</td>
                              <td>${Number(stockData[ticker][0]?.close).toFixed(2)}</td>
                              <td>{stockData[ticker][0]?.volume}</td>
                        <td
                          style={{
                            width:"20px",
                            padding:"0px",
                            textAlign:"center"
                          }}
                        >
                               <button
                                className="buttonFinancials"
                                  style={{
                                    border: "none",
                                    color: "white",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    background: "green",
                                    margin:"auto",
                                    padding:".3rem .9rem",
                                    borderRadius:2
                                  }}
                                  onClick={() => handleBuyClick(stockData[ticker][0])}
                                >
                                  Buy List
                                </button>
                              </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
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
              borderRadius: "6px",
            }}
          >
            {/* TODO: Isolate to a different container */}
            {/* search area  */}

            <h4>Top 5 to Sell</h4>
          </div>
          <div>
            {/* seelings */}
            <table className="table table-spaced" style={{width:"100%"}}>
              <thead>
                <tr>
                  {columnites.map((columnite, index) => (
                    <th key={index}>{columnite.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                  {sell_records &&
                    Object.keys(sell_records).map((ticker, index ) => (
                      <tr key={index}>
                        <td>{sell_records[ticker][0]?.ticker}</td>
                        <td>${Number(sell_records[ticker][0]?.open).toFixed(2)}</td>
                        <td>${Number(sell_records[ticker][0]?.high).toFixed(2)}</td>
                        <td>${Number(sell_records[ticker][0]?.low).toFixed(2)}</td>
                        <td>${Number(sell_records[ticker][0]?.close).toFixed(2)}</td>
                        <td>{sell_records[ticker][0]?.volume}</td>
                        <td
                            style={{
                              width:"20px",
                              padding:"0px",
                              textAlign:"center"
                            }}
                        >
                      <button
                            className="buttonFinancials"
                            style={{
                              padding: "5px 15px",
                              border: "none",
                              color: "white",
                              textAlign: "center",
                              textDecoration: "none",
                              border: "2px solid orange",
                              borderRadius: "5px",
                              background: "orange",
                              cursor: "pointer",
                              fontSize:".7rem"
                            }}
                            onClick={() => handleSellClick(sell_records[ticker][0])}
                          >
                            Sell List
                          </button>
                        </td>
                      </tr>
                ))}
              </tbody>
            </table>
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

export default EquityStock