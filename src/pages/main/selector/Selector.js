import React, { useEffect, useState } from "react";
import { BASEURL } from "../../../apis/api";

import ReactModal from "react-modal";
import { Accordion } from "@chakra-ui/react";

import "./style.css";
import News from "../../../components/atom/news/News";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminMain from "../../../components/admin/AdminMain";
import AdminRightBar from "../../../components/admin/AdminRightBar";
import AppNavbar from "../../../components/shared/navbar/Navbar";
const Selector = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modal, setModal] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
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
            padding: "0px 1rem",
          }}
        >
          <AppNavbar title="Selector" />
          <div
            className="main"
            style={{
              width: "100%",
            }}
          ></div>
        </div>
        <div className="right-bar-controller">
          <AdminRightBar />
        </div>
      </div>
      <ReactModal isOpen={modal} data={selectedRow} style={customStyles}>
        <button onClick={handleClick}>Close Modal</button>
        <p style={{ fontSize: "1.3rem" }}>
          Selected Row:{" "}
          <b style={{ color: "green" }}>{selectedRow?.stockExchangeName}</b>
        </p>
        <Accordion />
      </ReactModal>
    </div>
  );

  // const [loading, setLoading] = useState(false);
  // const [selectorDetails, setSelectorDetails] = useState({});
  // const [modal, setModal] = useState(false);
  // const [isData, setIsData] = useState(true);
  // const [records, setRecords] = useState([]);
  // const [formData, setFormData] = useState();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setModal(false);
  // };

  // const handleOpenClick = (e) => {
  //   e.preventDefault();
  //   setModal(true);
  // };

  // const [selectedRow, setSelectedRow] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleRowClick = (rowData) => {
  //   setSelectedRow(rowData);
  //   setModal(true);
  //   setIsModalOpen(true);
  // };
  // // const customStyles = {
  // //   content: {
  // //     top: "50%",
  // //     left: "50%",
  // //     marginRight: "-30%",
  // //     marginBottom: "-20%",
  // //     transform: "translate(-50%, -50%)",
  // //     width: "40%",
  // //     height: "50%",
  // //   },
  // // };
  // const columns = [
  //   {
  //     Header: "Captitalisation",
  //     accessor: "capitalisation",
  //   },
  //   {
  //     Header: "Status",
  //     accessor: "status",
  //   },
  //   {
  //     Header: "Stock Exchange Name",
  //     accessor: "stockExchangeName",
  //   },
  //   // {
  //   //   Header: "Logo",
  //   //   accessor: "statusLogo",
  //   // },
  //   // {
  //   //   Header: "Capitalisation",
  //   //   accessor: "capitalisation",
  //   // },
  // ];

  // const columnites = [
  //   { name: "Listing Name" },
  //   { name: "Symbol" },
  //   { name: "Capitalisation" },
  //   { name: "% Change" },
  //   { name: "Action" },
  // ];
  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     marginRight: "-30%",
  //     marginBottom: "-20%",
  //     transform: "translate(-50%, -50%)",
  //     width: "40%",
  //     height: "50%",
  //   },
  // };
  // useEffect(() => {
  //   const load_selectors = async () => {
  //     try {
  //       const response = await fetch(BASEURL);
  //       if (response.ok) {
  //         const response_data = JSON.parse((await response).json);
  //         setSelectorDetails(response_data);
  //         setLoading(true);
  //       } else {
  //         console.log("response was not loading");
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   load_selectors();
  // }, [loading]);

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "left",
  //       alignContent: "center",
  //     }}
  //   >
  //     <Sidebar />
  //     <div
  //       className="main"
  //       style={{
  //         width: "100%",
  //         padding: "2rem",
  //         display: "flex",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <nav
  //         className=""
  //         style={{
  //           width: "95%",
  //           padding: "0rem 2.2rem",
  //         }}
  //       >
  //         {/* search and profile box */}
  //         <h1
  //           style={{
  //             textAlign: "left",
  //           }}
  //         >
  //           Selector {selectorDetails}
  //         </h1>
  //       </nav>
  //     </div>
  //     <div className="table-container">
  //       <div
  //         className=""
  //         style={{
  //           padding: "1rem 0rem",
  //           width: "100%",
  //         }}
  //       >
  //         {/* tabIndex={10} */}

  //         <table className="table table-spaced">
  //           <thead>
  //             <tr>
  //               {columnites.map((columnite, index) => (
  //                 <th key={index}>{columnite.name}</th>
  //               ))}
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {records.map((record, index) => (
  //               <tr key={index}>
  //                 <td>{record.stockExchangeName}</td>
  //                 <td>{record.symbol}</td>
  //                 <td>${record.capitalisation}</td>
  //                 <td>{record.status}</td>
  //                 <td>
  //                   <a href={record.link}></a>
  //                   <button
  //                     className="buttonFinancials"
  //                     style={{
  //                       padding: "7px 15px",
  //                       border: "none",
  //                       color: "green",
  //                       textAlign: "center",
  //                       textDecoration: "none",
  //                       border: "2px solid green",
  //                       borderRadius: "5px",
  //                       cursor: "pointer",
  //                     }}
  //                     onClick={() => handleRowClick(record)}
  //                   >
  //                     {/* lift a modal experience to show the growth, value and economy stock */}
  //                     Get Financials
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Selector;
