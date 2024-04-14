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
import AdminNavbar from "../../../components/admin/AdminNavbar";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useTableHook } from "../../../hooks/TableHooks";
import ReactModal from "react-modal";
import Accordion from "../../../components/shared/accordion/Accordion";
import AdminRightBar from "../../../components/admin/AdminRightBar";

function EquityStock() {
  const { stock_id } = useParams();
  const [modal, setModal] = useState(false);
  const [isData, setIsData] = useState(true);
  const [records, setRecords] = useState([]);
  const [sell_records, setSellRecords] = useState([]);
  const [formData, setFormData] = useState();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };
  const token = localStorage.getItem('token')

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


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      marginRight: "-30%",
      marginBottom: "-20%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "50%",
    },
  };

  // const loadData = () => {
  //   fetch(`${BASEURL}/api/selector/stocks`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecords({ records: data });
  //       console.log("data records", data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setModal(true);
    setIsModalOpen(true);
    console.log("clicked");
  };
  const getData = async () => {
    await fetch(`${BASEURL}/api/selectors/tickers/buy`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.result);
        console.log("DATA", data.result);
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

  const columns = [
    { key: "ticker", label: "Ticker" },
    { key: "open", label: "Open" },
    { key: "high", label: "High" },
    { key: "low", label: "Low" },
    { key: "close", label: "Close" },
    { key: "adjclose", label: "Closing" },
    { key: "volume", label: "Volume" },
    { key: "date", label: "Date" },
    { key: "action", label: "Action" },
  ];

  const {
    Table,
    search,
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
    setData,
  } = useTableHook(columns, records, 5, handleRowClick);

  const navigate = useNavigate();
  return (
    <div className="page-controller">
      <AdminNavbar />
      <div className="body-controller">
        <AdminSidebar />
        <div
          className="main-container"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "0px 2rem",
            overflowY: "auto",
          }}
        >
          <button onClick={()=>navigate(-1)}>Back</button>
          <AppNavbar title="Equity Stock" />
          <div
            className="main"
            style={{
              width: "100%",
            }}
          >
            {/* consuming Hooks  */}
            <div
              style={{
                width: "100%",
              }}
            >
              <h3>Top 5 to Buy</h3>
              <Table />
            </div>
          </div>

          <div
            className="main"
            style={{
              width: "100%",
            }}
          >
            {/* consuming Hooks  */}
            <div
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <h3>Top 5 to Sell</h3>
              <Table />
            </div>
          </div>
          <ReactModal isOpen={modal} data={selectedRow} style={customStyles}>
            <button onClick={handleClick}>Close Modal</button>
            <p style={{ fontSize: "1.3rem" }}>
              Selected Row:{" "}
              <b style={{ color: "green" }}>{selectedRow?.stockExchangeName}</b>
            </p>
            <p>Are you ready to buy?</p>
          </ReactModal>
        </div>
        <div className="right-bar-controller">
          <AdminRightBar />
        </div>
      </div>
    </div>
  );
}

export default EquityStock;
