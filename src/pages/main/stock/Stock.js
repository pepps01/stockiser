import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

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

const Stock = (props) => {
  const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const [records, setRecords] = useState([]);
  const [sell_records, setSellRecords] = useState([]);
  const [formData, setFormData] = useState();


  const location = useLocation();

  // Parse the query string parameters
  const queryParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const stock_name = queryParams.get('stock_name').toLowerCase();
  const stock_type = queryParams.get('stock_type').toLowerCase();

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
    { name: "Date" },
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

  // const getData = async () => {
  //   await fetch(`${BASEURL}/api/selectors/tickers/buy`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRecords(data.result);
  //       console.log("DATA", data);
  //       // console.log(data.result);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // };


  const getData = async () => {
    await fetch(`${BASEURL}/api/get-stock-market?stock_name=${stock_name}&stock_type=${stock_type}`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.result);
        console.log("DATA", data);
        // console.log(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  

  useEffect(() => {
    getData();
  }, []);

  const loadData = async () => {
    await fetch(`${BASEURL}/api/selectors/tickers/sell`)
      .then((res) => res.json())
      .then((data) => {
        setSellRecords(data.result);
        console.log("DATA", data);
        // console.log(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    loadData();
  }, []);

  const navigate = useNavigate();
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

            <h3> Value Stock</h3>
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
                          border: "2px solid green",
                          borderRadius: "5px",
                          cursor: "pointer",
                          background: "green",
                        }}
                        onClick={() => handleBuyClick(record)}
                      >
                        {/* lift a modal experience to show the growth, value and economy stock */}
                        Add to Buy List
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
            <table className="table table-spaced">
              <thead>
                <tr>
                  {columnites.map((columnite, index) => (
                    <th key={index}>{columnite.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sell_records.map((sell_record, index) => (
                  <tr key={index}>
                    <td>{sell_record.ticker}</td>
                    <td>${sell_record.open}</td>
                    <td>${sell_record.high}</td>
                    <td>${sell_record.low}</td>
                    <td>${sell_record.close}</td>
                    <td>{sell_record.volume}</td>
                    <td>{sell_record.date}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <a href={sell_record.action}></a>
                      <button
                        className="buttonFinancials"
                        style={{
                          padding: "7px 15px",
                          border: "none",
                          color: "white",
                          textAlign: "center",
                          textDecoration: "none",
                          border: "2px solid orange",
                          borderRadius: "5px",
                          background: "orange",
                          cursor: "pointer",
                        }}
                        onClick={() => handleSellClick(sell_record)}
                      >
                        {/* lift a modal experience to show the growth, value and economy stock */}
                        Add to Sell List
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
};

export default Stock;
