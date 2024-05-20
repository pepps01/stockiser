import React, { useEffect, useState } from "react";

import "./dashboard.css";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import AdminSidebar from "../../../components/admin/AdminSidebar";
// import AdminMain from "../../../components/admin/AdminMain";
import AdminRightBar from "../../../components/admin/AdminRightBar";
import AppNavbar from "../../../components/shared/navbar/Navbar";
import { useTableHook } from "../../../hooks/TableHooks";
import { BASEURL } from "../../../apis/api";
import ReactModal from "react-modal";
import Accordion from "../../../components/shared/accordion/Accordion";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  // const [isData, setIsData] = useState(true);
  const [records, setRecords] = useState([]);
  // const [formData, setFormData] = useState();
  const [selectedRow, setSelectedRow] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setModal(true);
    // setIsModalOpen(true);
    console.log("CLICKED!",  rowData);
    console.log("End Clicked!");
  };
  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  // const handleOpenClick = (e) => {
  //   e.preventDefault();
  //   setModal(true);
  // };

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
  const columns = [
    // { key: "id", label: "S/N" },
    { key: "listing_name", label: "Listing Name" },
    { key: "symbol", label: "Symbol" },
    { key: "market_cap", label: "Market Capitalisation" },
    { key: "percentage_change", label: "Market Status" },
    { key: "action", label: "Action" },
  ];
  const token = localStorage.getItem('token')


  const getData = async () => {
    await fetch(`${BASEURL}/api/selector/selected`,{
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.result);
        console.log("data", data);
        console.log("data results", data.result);
        // console.log(data.result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
// ! Weldone is the good day
// * This is a TODO comment 
// TODO is the application 
// ? This is not normal 
  useEffect(  () => {
    getData();
  }, []);

  const {
    Table,
    search,
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
    // setData,
  } = useTableHook(columns, records, 10, handleRowClick);

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
          }}
        >
          <AppNavbar title="Dashboard" />

          
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
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                style={{
                  width: "30%",
                  height:"4vh"
                }}
              />
              <Table />
              
              <div
                className=""
                style={{
                  display:  "flex",
                  width: "100%",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <p>
                  Page {currentPage} of {totalPages}
                </p>

                <div
                  className=""
                  style={{
                    marginLeft: "1rem",
                  }}
                >
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{
                      color: "white",
                      background: "green",
                      border: "green",
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ReactModal isOpen={modal} data={selectedRow} style={customStyles}>
            <button onClick={handleClick}>Close Modal</button>
            <p style={{ fontSize: "1.3rem" }}>
              Selected Row:{selectedRow}
              <b style={{ color: "green" }}>{selectedRow?.stockExchangeName}</b>
            </p>
            <Accordion  stockName={selectedRow}/>
          </ReactModal>
        </div>
        <div className="right-bar-controller">
          <AdminRightBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// Creat new Hooks
