import React, { useEffect, useState } from "react";
import Algizer from "./../../../assets/algizer.jpeg";
import Sidebar from "../../../components/shared/sidebar";
import AppNavbar from "../../../components/shared/navbar/Navbar";
import MarketNews from "../../../components/shared/market_news/MarketNews";
import TopMovers from "../../../components/shared/top_movers/TopMovers";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import AssetValidate from "./../../../assets/misc/row.svg";
import ReactModal from "react-modal";
import Accordion from "../../../components/shared/accordion/Accordion";

import Profileimage from "./../../../assets/pepple.jpeg";

import "./profile.css";
import WishList from "./../../../assets/misc/Iconly/Bulk/Profile.svg";
import Chart from "./../../../assets/misc/Iconly/Bulk/Chart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASEURL } from "../../../apis/api";
import { useNavigate } from "react-router-dom";

import ArrowDown from "./../../../assets/misc/arrow-down-right.svg";
import ArrowUp from "./../../../assets/misc/up-arrow.svg";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Sunny Pepple");
  // const [email, setEmail] = useState("slpepple01@gmail.com");
  // const [phone, setPhone] = useState("08077201806");
  const [formData, setFormData] = useState([]);
  const [stockData, setStockData] = useState(null);
  const [redirectPage, setRedirectPage] = useState(false);
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };
  const columnites = [
    { name: "Ticker" },
    { name: "Listing Name" },
    { name: "Purchase Action" },
    { name: "Purchase Price" },
    { name: "Real Time Price" },
    { name: "Percentage Change" },
    { name: "Date" },
  ];

  // get data
  // where and how can the id be gotten
  // const getData = async () => {
  //   await fetch(`${BASEURL}/api/transaction/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFormData(data);
  //       console.log(data);
  //     });
  // };

  const loadTransactionData = async (e) => {
    await fetch(`${BASEURL}/api/transactions/7`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.result);
        console.log("data records", data.result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // getData();
    loadTransactionData();
  }, []);

  // post data
  const handleSubmit = async (e) => {
    try {
      const response = await fetch(BASEURL + "/edit-profile", {
        method: "POST",
        body: JSON.stringify(formData),
        "Content-type": "application/json",
      });

      if (response.ok) {
        const result = await response.json();
        //   localStorage.setItem("token", result.access_token);
        //   const token = localStorage.getItem("token");
        //   console.log("token_case", token);
        setRedirectPage(true);
      } else {
        console.log("Failed", response.status);
      }
    } catch (e) {
      console.log("Error", e.message);
    }
  };

  

  useEffect(() => {
    if (redirectPage) {
      navigate("/selector");
    }
  }, [redirectPage]);

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
          <AppNavbar title="Profile" />

          {/* Another level */}
          <div
            className=""
            style={{
              width: "95%",
            }}
          >
            <div className="profileContainer">
              <div className="imageContainer">
                <img src={Profileimage} alt="profile image" />
                <div className="other-info">
                  <p style={{ color: "grey", bold: 400 }}>Account Name</p>
                  <h2>{name}</h2>
                </div>
              </div>
              <div className="assetValuation">
                <img src={Chart} alt="asset valuation" />
                <div className="other-info">
                  <h4>Total Asset Valuation</h4>
                  <h1 style={{ textAlign: "center" }}>{0}</h1>
                </div>
              </div>
              {/* <div className="assetValuation">
              <img src={Chart} alt="asset valuation" />
              <div className="other-info">
              <h4>Registered Date</h4>
              <h1 style={{ textAlign: "center" }}>20th of December, 2023</h1>
              </div>
            </div> */}
              <div className="assetValuation">
                <img src={Chart} alt="asset valuation" />
                <div className="other-info">
                  <image alt="asset valuation" />
                  <h4>WatchList</h4>
                  <h1 style={{ textAlign: "center" }}>{0}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* manage container */}
          <div className="manageContainer">
            <ul className="miniSidebar">
              <li>
                <img src={WishList} alt="icon" />

                <a href="" alt="">
                  Personal Information
                </a>
              </li>
              <li>
                <img src={Chart} alt="icon" />
                <a href="" alt="">
                  Purchase List
                </a>
              </li>
            </ul>

            {/* <button onClick={handleSubmit}>Edit Profile</button>
            <button onClick={handleOpenClick}>Open</button> */}
            {/* <div className="userDetails">
              <h2>Personal Details</h2>
              <div>
                <h4>Phone Number:{}</h4>
                <h4>Email:{}</h4>
              </div>
            </div> */}
            <div className="boardContainer">
              <table
                className="userdetails table table-spaced space-table"
                tabIndex={10}
                width={"100%"}
              >
                <thead>
                <tr>
                  {columnites.map((columnite, index) => (
                    <th key={index}>{columnite.name}</th>
                  ))}
                </tr>
                 
                </thead>
                <tbody>
                {/* {
                  records.map((record, index ) => (
                      <tr key={index}>
                              <td>{record.stock}</td>
                              <td>${record.amount}</td>
                              <td>${record.transaction_name}</td>
                              <td>${record}</td>
                              <td>${record}</td>
                              <td>{record}</td>
                    </tr>
                  ))} */}
                  <tr>
                    <td>1</td>
                    <td>APPL</td>
                    <td className="">
                      <p className="status">Bought</p>
                    </td>
                    <td>195.53</td>
                    <td>194.19</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <img src={ArrowDown} alt="Arraow Up" width={40} />
                      $0
                    </td>
                    <td>20-12-2023</td>
                  </tr>
                  {/* <tr>
                    <td>2</td>
                    <td>MSFT</td>
                    <td>Microsoft</td>
                    <td>
                      <p className="status-sold">Bought</p>
                    </td>
                    <td>$374.75</td>
                    <td>$375.05</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        alignContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <img src={ArrowUp} alt="Arraow Up" width={40} />
                      $1
                    </td>
                    <td>22-12-2023</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Action bar */}
        <div
        // style={{
        //   maxWidth: "300px",
        //   width: "100%",
        //   height: "100vh",
        //   background: "#FFF",
        //   boxShadow: "3px 2px 3px #E5E7EB",
        //   flexDirection: "column",
        //   alignContent: "center",
        //   padding: "0rem 1.5rem",
        //   // zIndex: 2,
        // }}
        >
          {/* Top Movers*/}
          <div>
            {/* <MarketNews />
            <TopMovers />
            <QuickActions /> */}
            {/* <img
              src={AssetValidate}
              alt="Asset Validate"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              style={{
                width: "100%",
              }}
            /> */}
          </div>
        </div>
        <ReactModal isOpen={modal}>
          <button onClick={handleClick}>Close Modal</button>
          <Accordion />
        </ReactModal>
      </div>
    </div>
  );
};

export default Profile;
