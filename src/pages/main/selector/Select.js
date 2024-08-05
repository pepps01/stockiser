import React, { useState, useEffect } from 'react'
import Footerbar from '../../../components/common/Footerbar'
import NavigationBar from '../../../components/common/NavigationBar'
import DashboardSidebar from '../../../components/main/DashboardSidebar'
import MainBoard from '../../../components/main/MainBoard'
import NewsBoard from '../../../components/main/NewsBoard'
import SelectorBoard from '../../../components/main/SelectorBoard'

import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";
import Sidebar from "../../../components/shared/sidebar";
import { BASEURL } from "../../../apis/api";

import Loading from "./../../../components/atom/loading/Loading";
import CustomNavbar from "../../../components/shared/navbar/CustomNavbar";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'

import { CiCalendar, CiCircleInfo, CiSearch, CiFilter } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

function Select() {
  // const [stockName, useStockName] = useState("TSLA")
  // const [stockType, useStockType] = useState("Value")
  
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
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const queryParams = new URLSearchParams(location.search);
  const stock_name= queryParams.get('stock_name').toLowerCase();
  const stock_type = queryParams.get('stock_type').toLowerCase();

//  useEffect(() => {
//     console.log("STOCKK_TYPE", stock_type)
//     console.log("STOCKK_NAME", stock_name)
//  }, [stock_name, stock_type])

  // const handleOpenClick = (e) => {
  //   e.preventDefault();
  //   setModal(true);
  // };

  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  

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

  // const url= `/invearn?stock_name=${stockName}&stock_type=${stockType}`
  return (
    <div className='w-full'>
    <NavigationBar/>
      <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
          <DashboardSidebar/>
          <div className='sm:w-8/12 h-screen '>
    <div className='px-4 bg-slate-50 sm:px-8'>
      <div className='w-full pt-8'>
          {/* <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl '>{stock_name?capitalizeString(stock_name):" "} Stock </h2> */}
      </div>

      <div className='flex justify-between items-center mt-4'>
          <div className='border-2 border-gray-300  flex gap-2 items-center  px-2 rounded-md '>
                    <CiSearch size={20}/>  <input type={"search"} placeholder="Search" className="w-full p-1 flex outline-none w-[300px]"/>
           </div>
                
          
          <div className=' flex justify-left items-center gap-4'>
              <div className='border-2 border-gray-300 px-4 py-2 rounded-md flex gap-2 items-center '>
              <CiCalendar size={20} />

              <p className='font-extrabold'>Select Dates</p>
              <select className='hidden'>
                  <option value={'12'}>12 months</option>
                  <option value={'30 days'}>30 days</option>
                  <option value={'7 days'}>7 days</option>
                  <option value={'2 hours'}>24 hours</option>
              </select>
          </div>
      </div>

  </div>

        <div className='my-4 rounded-md bg-white border-2 border-gray-100' >
                {/* card title  */}
              <div className='px-4 pt-4 pb-4 border-2  flex justify-between items-center'>
                  <div className='flex gap-2 items-center justify-start'>
                      <h2 className='font-bold text-md'>Stocks to Buy</h2>
                      <CiCircleInfo />
                  </div>
              </div>
          {/* card table */}
              <table className='w-full border-collapse table-auto bg-white'>
                  <thead className='bg-slate-100 '>
                      <tr className='text-center'>
                      {columnites.map((columnite, index) => (
                    <th key={index} className='py-4 text-left pl-4'>{columnite.name}</th>
                  ))}
   
                      </tr>
                  </thead>
                  <tbody>
                 
                      {buy &&
                    buy.map((item, index ) => (
                      <tr key={index}>
                        <td className='font-medium py-4  text-left pl-4'>{item?.ticker}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.open).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item.high).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.low).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.close).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.adjclose).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>{item?.volume}</td>
                        <td

                            className='font-medium py-4  text-left pl-4'
                        >
                            <button
                                  className="buttonFinancials  bg-lime-600 font-extrabold text-lg"
                                  style={{
                                    padding: "8px 15px",
                                    border: "none",
                                    color: "white",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                   fontSize:".8rem"
                              }}
                              onClick={() => handleBuyClick(item)}
                              >
                              Buy List
                            </button>
                        </td>
                      </tr>
                ))}
                  </tbody>
              </table>
          </div>
          
     <div className='my-4 rounded-md bg-white border-2 border-gray-100 mt-8' >
                {/* card title  */}
              <div className='px-4 pt-4 pb-4 border-2  flex justify-between items-center'>
                  <div className='flex gap-2 items-center justify-start'>
                      <h2 className='font-bold text-md'>Stocks to Sell</h2>
                      <CiCircleInfo />
                  </div>
             
              </div>
              <table className='w-full border-collapse table-auto bg-white'>
                  <thead className='bg-slate-100 '>
                  <tr className='text-center'>
                      {columnites.map((columnite, index) => (
                    <th key={index} className='py-4 text-left pl-4'>{columnite.name}</th>
                  ))}
                      </tr>
                  </thead>
                  <tbody>
                      {data &&
                    data.map((item, index ) => (
                      <tr key={index}>
                        <td className='font-medium py-4  text-left pl-4'>{item?.ticker}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.open).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item.high).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.low).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.close).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>${Number(item?.adjclose).toFixed(2)}</td>
                        <td className='font-medium py-4  text-left pl-4'>{item?.volume}</td>
                        <td className='font-medium py-4  text-left pl-4'
                           
                        >
                      <button
                            className="buttonFinancials font-black text-lg bg-orange-700 border-none"
                            style={{
                              padding: "5px 15px",
                              border: "none",
                              color: "white",
                              textAlign: "center",
                              textDecoration: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                              fontSize:".8rem"
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
          
  </div>


</div>
          <NewsBoard/>
      </div>
  </div>
  )
}

export default Select
