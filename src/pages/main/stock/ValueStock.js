import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AppNavbar from "../../../components/shared/navbar/Navbar";
import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";
import Sidebar from "../../../components/shared/sidebar";
import { BASEURL } from "../../../apis/api";

import Loading from "./../../../components/atom/loading/Loading";
import CustomNavbar from "../../../components/shared/navbar/CustomNavbar";

const ValueStock =()=> {
  const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const [records, setRecords] = useState([]);
  const [sell_records, setSellRecords] = useState([]);
  const [sells, setSells] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectData, setSelectData] = useState({
    ticker:"",
    open:"",
    high:"",
    low:"",
    close:"",
    volume:"",
    date:"",
    token:""
  })
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleBuyClick = async (records) => {
     const newData = {
      ticker: records?.ticker,
      close: records?.close,
      high: records?.high, 
      low: records?.low, 
      open:records?.open, 
      token:localStorage.getItem('token'),
      date:records?.date,
      volume: records?.volume, 
      action_taken: "buy", 
      status:"processing",
      transaction_name: "Value"
    }
    console.log("records", records.ticker)
    
    setSelectData(newData)
     
    try{
      const response = await fetch(`${BASEURL}/api/selectors/add-list`,{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify(selectData) 
      })

      if (!response.ok){
        console.log("error status", response.data)
      }
      const result  = await response.json();

      console.log(" positive result", result.data);
      console.log(" positive result", result.status);
      console.log("  result", result.message);
      console.log(" message result", result.result);

    }catch(error){console.log("error", error)}

    console.log("selected data", selectData)

    alert("The selected stock has been added to Buy List for $" + records?.high);
  };

  const handleSellClick = async (records) => {
    const newData = {
      ticker: records?.ticker,
      close: records?.close,
      high: records?.high, 
      low: records?.low, 
      open:records?.open, 
      token:localStorage.getItem('token'),
      date:records?.date,
      volume: records?.volume, 
      action_taken: "sell", 
      status:"processing",
      transaction_name: "Value"
    }
    
    setSelectData(newData)
     
    try{
      const response = await fetch(`${BASEURL}/api/selectors/add-list`,{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify(selectData) 
      })

      if (!response.ok){
        console.log("error status", response.data)
      }
      const result  = await response.json();

      console.log(" positive result", result.data);
      console.log(" positive result", result.status);
      console.log("  result", result.message);
      console.log(" message result", result.result);

    }catch(error){console.log("error", error)}

    console.log("selected data", selectData)

    alert("The selected stock has been added to Sell List for $" + records?.high);
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

  const loadFormData = () => {
    fetch(`${BASEURL}/api/selector/add_list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRecords({ records: data });
        console.log("data records", data);
      })
      .catch((err) => console.log(err));
  };

  const onSelect = async()=>{
    try{
      const response = fetch(`${BASEURL}/api/selectors/add-list`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(selectData),
      })
      
      if(response.ok){
        const result = await response.json();

        if (response.status !== "error"){
          console.log("response", result.message)
          // engage react notify 
          // get the message od creattion
        }
      }
    }catch(e){
      console.log("Error",e)
    }
  }

  const getData = async () => {
    await fetch(`${BASEURL}/api/selectors/buy-stock`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStockData(data.result)
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const loadData = async () => {
    await fetch(`${BASEURL}/api/selectors/sell-value-stock`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSellRecords(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
    loadData();
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
                {stockData &&
                  Object.keys(stockData).map((ticker, index ) => (
                      <tr key={index}>
                              <td>{stockData[ticker][0]?.ticker}</td>
                              <td>${stockData[ticker][0]?.open}</td>
                              <td>${stockData[ticker][0]?.high}</td>
                              <td>${stockData[ticker][0]?.low}</td>
                              <td>${stockData[ticker][0]?.close}</td>
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
            <table className="table table-spaced">
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
                        <td>${sell_records[ticker][0]?.open}</td>
                        <td>${sell_records[ticker][0]?.high}</td>
                        <td>${sell_records[ticker][0]?.low}</td>
                        <td>${sell_records[ticker][0]?.close}</td>
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

export default ValueStock