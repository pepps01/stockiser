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
import axios from 'axios';

const ValueStock =()=> {
  // const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  const [stockType, setStockType] = useState("");
  const [stockName, setStockName] = useState("");
  const [sell_records, setSellRecords] = useState([]);
  const [stockData, setStockData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [buy, setBuy] = useState([]);
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

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  
  // const handleOpenClick = (e) => {
  //   e.preventDefault();
  //   setModal(true);
  // };

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const stock_name= queryParams.get('stock_name').toLowerCase();
  const stock_type = queryParams.get('stock_type').toLowerCase();

  // setStockType(queryParams.get('stock_type').toLowerCase())
  // setStockName(queryParams.get('stock_type').toLowerCase())

  const getBackendData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/selector/get-stock-market?stock_name=${stock_name}&stock_type=${stock_type}`,{
                headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },

      });
      console.log("Response", response.data.result.buy);
      setBuy(response.data.result.buy)
      setData(response.data.result.sell)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    };

  
  const handleBuyClick = async (records) => {
    try{
      const newData = {
        ticker: records?.ticker,
        close: records?.close,
        adjclose: records?.adjclose,
        high: records?.high, 
        low: records?.low, 
        open:records?.open, 
        token:localStorage.getItem('token'),
        // date:records?.date,
        volume: records?.volume, 
        action_taken: "buy", 
        status:"processing",
        stock_name:stock_name,
        stock_type:stock_type,
        transaction_name:  stock_type? stock_type :"value"
      }


      console.log("new Data", newData)

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
    try{
      const newSellData = {
        ticker: records?.ticker,
        close: records?.close,
        adjclose: records?.adjclose,
        high: records?.high, 
        low: records?.low, 
        open:records?.open, 
        token:localStorage.getItem('token'),
        // date:records?.date,
        stock_name:stock_name,
        stock_type:stock_type,
        volume: records?.volume, 
        action_taken: "sell", 
        status:"processing",
        transaction_name: stock_type? stock_type :"value"
      }
     console.log("selling", newSellData)    
      const response = await fetch(`${BASEURL}/api/transactions/sell-list`,{
        method:'POST',
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify(newSellData) 
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
    { name: "Adj Close" },
    { name: "Volume" },
    { name: "Action" },
  ];

  useEffect(() => {
    getBackendData()

    setStockName(queryParams.get('stock_name').toLowerCase());
    setStockType(queryParams.get('stock_type').toLowerCase());
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

            <h3> {stock_name?capitalizeString(stock_name):" "} Stock</h3>
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
              {buy &&
                    buy.map((item, index ) => (
                      <tr key={index}>
                        <td>{item?.ticker}</td>
                        <td>${Number(item?.open).toFixed(2)}</td>
                        <td>${Number(item.high).toFixed(2)}</td>
                        <td>${Number(item?.low).toFixed(2)}</td>
                        <td>${Number(item?.close).toFixed(2)}</td>
                        <td>${Number(item?.adjclose).toFixed(2)}</td>
                        <td>{item?.volume}</td>
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
                              onClick={() => handleBuyClick(item)}
                              >
                              buy List
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
              {data &&
                    data.map((item, index ) => (
                      <tr key={index}>
                        <td>{item?.ticker}</td>
                        <td>${Number(item?.open).toFixed(2)}</td>
                        <td>${Number(item.high).toFixed(2)}</td>
                        <td>${Number(item?.low).toFixed(2)}</td>
                        <td>${Number(item?.close).toFixed(2)}</td>
                        <td>${Number(item?.adjclose).toFixed(2)}</td>
                        <td>{item?.volume}</td>
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
                            onClick={() => handleSellClick(item)}
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

export default ValueStock