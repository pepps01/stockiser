import React, { useEffect, useState } from "react";
import { useParams, useNavigate,useLocation } from "react-router-dom";

// import AppNavbar from "../../../components/shared/navbar/Navbar";
import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";
import Sidebar from "../../../components/shared/sidebar";
import { BASEURL } from "../../../apis/api";

import Loading from "./../../../components/atom/loading/Loading";
import CustomNavbar from "../../../components/shared/navbar/CustomNavbar";

const Optimiser =()=> {
  const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  // const [isData, setIsData] = useState(true);
  // const [records, setRecords] = useState([]);
  // const [sell_records, setSellRecords] = useState([]);
  // const [sells, setSells] = useState(null);
  const [stockData, setStockData] = useState(null);
  // const [formData, setFormData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const [selectData, setSelectData] = useState({
    ticker:"",
    open:"",
    high:"",
    low:"",
    close:"",
    volume:"",
    token:""
  })
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const navigatePage = (e) => {
    e.preventDefault();
    navigate("/parameter-estimate");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const stock_name = queryParams.get('stock_name').toLowerCase();
  const stock_type = queryParams.get('stock_type').toLowerCase();

  // const encryptedParam1 = CryptoJS.AES.encrypt(param1, 'secret-key').toString();
  // const hashedParam2 = CryptoJS.SHA256(param2).toString();
  const getBackendData = async () => {
      await fetch(`${BASEURL}/api/optimiser/optimise`,{
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setStockData(data.result.buy);
          setSellRecords(data.result.sell);
          // // console.log("data", data);
          // // console.log("data results", data.result);
          // console.log("sell records",sell_records)
          console.log(" records",data.result)
          console.log(" records",data.result.sell)
          // console.log(data.result);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

  
  const handleBuyClick = async (records) => {
    try{
      const newData = {
        ticker: records?.ticker,
        close: records?.close,
        high: records?.high, 
        low: records?.low, 
        open:records?.open, 
        token:localStorage.getItem('token'),
        // date:records?.date,
        volume: records?.volume, 
        action_taken: "buy", 
        status:"processing",
        transaction_name:  stock_type? stock_type :"value"
      }
      const response = await fetch(BASEURL+"/api/transactions/buy-list",{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body:JSON.stringify(newData) 
      })

      if (!response.ok){
        console.log("error status", response.data)
      }
      const result  = await response.json();
      
      alert(`${result.result} $${Number(records?.high).toFixed(2)}`);
      console.log("  result", result.message);
      console.log(" message result", result.result);

    }catch(error){console.log("error", error)}

  };

  const handleSellClick = async (records) => {
    const newData = {
      ticker: records?.ticker,
      close: records?.close,
      high: records?.high, 
      low: records?.low, 
      open:records?.open, 
      // date:records?.date,
      volume: records?.volume, 
      action_taken: "sell", 
      status:"processing",
      transaction_name: stock_type? stock_type :"value"
    }
   console.log("selling", newData)    
    try{
      const response = await fetch(`${BASEURL}/api/transactions/sell-list`,{
        method:'POST',
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify(newData) 
      })
      
      if (!response.ok){
        console.log("error status", response.data)
      }

      const result  = await response.json();
      alert(`${result.result} "$" ${Number(records?.high).toFixed(2)}`);

      console.log("  result", records?.high);
      console.log(" message result", result.result);

    }catch(error){
      console.log("error", error)
    }

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

  useEffect(() => {
    getBackendData()
  }, []);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
   return <Loading/>
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomNavbar/>
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
              cursor:"pointer"
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

            <h3>Optimiser</h3>
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
                Estimate Parameters
              </button>
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
                              <td>{stockData[ticker][0]?.ticker? "":""}</td>
                              <td>${Number(stockData[ticker][0]?.open).toFixed(2)? "":""}</td>
                              <td>${Number(stockData[ticker][0]?.high).toFixed(2)? "":""}</td>
                              <td>${Number(stockData[ticker][0]?.low).toFixed(2)? "":""}</td>
                              <td>${Number(stockData[ticker][0]?.close).toFixed(2)? "":""}</td>
                              <td>{stockData[ticker][0]?.volume}</td>
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

export default Optimiser