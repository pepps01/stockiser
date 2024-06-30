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

import Profileimage from "./../../../assets/avatar.png";

import "./profile.css";
import WishList from "./../../../assets/misc/Iconly/Bulk/Profile.svg";
import Chart from "./../../../assets/misc/Iconly/Bulk/Chart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASEURL } from "../../../apis/api";
import { useNavigate } from "react-router-dom";

import ArrowDown from "./../../../assets/misc/arrow-down-right.svg";
import ArrowUp from "./../../../assets/misc/up-arrow.svg";
import axios from "axios";


const Profile = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState({
    "firstname":"Sunny",
    "lastname":"Pepple",
    "valuation": 6, 
    "assets": 50
  }); 
  // const [email, setEmail] = useState("slpepple01@gmail.com");
  // const [phone, setPhone] = useState("08077201806");
  const [formData, setFormData] = useState([]);
  const [stockData, setStockData] = useState(null);
  const [redirectPage, setRedirectPage] = useState(false);
  const [records, setRecords] = useState([]);
  const [profile, setProfile] = useState({});
  const [file, setFile] = useState("")
  const [fileCheck,  setFileCheck] = useState(false)
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleNavigate = (item)=> {
    console.log("target", item)
    navigate(`/transaction/${item}`)
  }

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };
  const columnites = [
    { name: "Ticker" },
    { name: "Purchase Action" },
    { name: "Purchase Price" },
    { name: "Real Time Price" },
    { name: "Percentage Change" },
    { name: "Date" },
    { name: "Action" },
  ];

  const getBackendData = async () => {
    try {
        const response = await axios.get(`${BASEURL}/api/transactions/user`,{
                  headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
        });
        console.log("Response", response.data.result);
        setRecords(response.data.result);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const get_profile = async () => {
      try {
          const response = await axios.get(`${BASEURL}/api/profile/view-profile`,{
                    headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
          });
          console.log("Profile response", response.data.result);
          setProfile(response.data.result)
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
  const handlePhoto =(e)=>{
      setFile(URL.createObjectURL(e.target.files[0]))
      setFileCheck(true)
      console.log("Incoming")
  }

  const loadTransactionData = async (e) => {
    await fetch(`${BASEURL}/api/transactions/7`, {
      method: 'GET',
      // mode: 'no-cors',
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
    // getData();
    get_profile()
    getBackendData();
  }, []);

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
              <div className="imageContainer" style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src={fileCheck ? file: Profileimage} alt="profile image" className="" style={{width:150, height:150}}/>
               
                <form onSubmit={handleSubmit} className="" style={{position:"relative", top:0, right:0}}>
                  <div className="form-group" style={{display:"inline", position:"relative", top:"10px", right:"-30%"}}>
                    <input type={'file'} onChange={handlePhoto} style={{display:"inline", color:"white",}}/>
                  </div>
                </form>
              </div>
              <div className="other-info">
                  <p style={{ color: "grey", bold: 400 }}>Account Name</p>
                  <h2>{profile?.name}</h2>
                </div>
              <div className="assetValuation">
                <img src={Chart} alt="asset valuation" />
                <div className="other-info">
                  <h4>Total Purchase List</h4>
                  <h1 style={{ textAlign: "center" }}>{profile?.total_purchases}</h1>
                </div>
              </div>
      
              <div className="assetValuation">
                <img src={Chart} alt="asset valuation" />
                <div className="other-info">
                  <image alt="asset valuation" />
                  <h4>WatchList</h4>
                  <h1 style={{ textAlign: "center" }}>{profile?.count}</h1>
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
                  {records &&
                    records.map((item,index) => (
                      <tr key={index}>
                        <td>{item.stock}</td>
                        <td>{item?.action_taken}</td>
                        <td>{item?.amount}</td>
                        <td>{item?.transaction_reference} <img src={ArrowDown}/></td>
                        <td>{item?.transaction_name}</td>
                        <td>{item?.date_added}</td>
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
                                border: "2px solid green",
                                borderRadius: "5px",
                                background: "green",
                                cursor: "pointer",
                                fontSize:".7rem"
                              }}
                              onClick={() => handleNavigate(item.id)}
                              >
                               View More
                            </button>
                        </td>
                      </tr>
                    ))}
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
