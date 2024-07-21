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
import NavigationBar from "../../../components/common/NavigationBar";
import DashboardSidebar from "../../../components/main/DashboardSidebar";
import NewsBoard from "../../../components/main/NewsBoard";
import MainBoard from "../../../components/main/MainBoard";
import Footerbar from "../../../components/common/Footerbar";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

import { CiCalendar, CiCircleInfo, CiSearch, CiFilter } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [records, setRecords] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [count, setCount] = useState(20)


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
      top: "40%",
      left: "50%",
      marginRight: "-10%",
      marginBottom: "-10%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "40%",
    },
  };
  const columns = [
    // { key: "id", label: "S/N" },
    { key: "listing_name", label: "Listing Name" },
    { key: "symbol", label: "Symbol" },
    { key: "empty", label: "" },
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
    
//     <div className="page-controller">
//       <AdminNavbar />
//       <div className="body-controller">
//         <AdminSidebar />
//         <div
//           className="main-container"
//           style={{
//             width: "100%",
//             boxSizing: "border-box",
//             padding: "0px 2rem",
//           }}
//         >
//           <AppNavbar title="Dashboard" />
//           <div
//             className="main"
//             style={{
//               width: "100%",
//             }}
//           >
//             {/* consuming Hooks  */}
//             <div
//               style={{
//                 width: "100%",
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={search}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 style={{
//                   width: "30%",
//                   height:"4vh"
//                 }}
//               />
//               <Table />
              
//               <div
//                 className=""
//                 style={{
//                   display:  "flex",
//                   width: "100%",
//                   justifyContent: "right",
//                   alignItems: "center",
//                 }}
//               >
//                 <p>
//                   Page {currentPage} of {totalPages}
//                 </p>

//                 <div
//                   className=""
//                   style={{
//                     marginLeft: "1rem",
//                   }}
//                 >
//                   <button
//                     disabled={currentPage === 1}
//                     onClick={() => handlePageChange(currentPage - 1)}
//                   >
//                     Previous
//                   </button>
//                   <button
//                     disabled={currentPage === totalPages}
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     style={{
//                       color: "white",
//                       background: "green",
//                       border: "green",
//                     }}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>

// {/* to support the transactions  */}
//             <div className="card">
//                       {/* total transactions  */}
//                       {/* total buy list   */}
//                       {/* sell list  */}
//             </div>
//           </div>
        
<div className='w-full'>
        <NavigationBar/>
        <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
            <DashboardSidebar/>
            {/* <MainBoard/> */}
            <div className='sm:w-8/12 h-screen '>
          <div className='px-4 bg-slate-50 sm:px-8'>
            <div className='w-full pt-8'>
                <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl '>Stock Market</h2>
                {/* subtext */}
                <div className='text-lg'>View real-time trades and transactions</div>
            </div>

            <div className='flex justify-between items-center mt-4'>
                <div className='border-2 border-gray-300  flex gap-2 items-center py-2 px-16 rounded-md'>
                    <CiSearch size={20}/>  <p className='font-regular '>Search</p>
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
        
                <div className='border-2 border-gray-300  flex gap-2 items-center py-2 px-4 rounded-md'>
                    <CiFilter size={20}/>  <p className='font-extrabold '>Filters</p>
                </div>
            </div>

        </div>

        {/* table component */}
        <div className='my-4 rounded-md bg-white border-2 border-gray-100' >
                {/* card title  */}
                    <div className='px-4 pt-4 pb-4 border-2  flex justify-between items-center'>
                        <div className='flex gap-2 items-center justify-start'>
                            <h2 className='font-bold text-md'>List View</h2>
                            <CiCircleInfo />
                        </div>
                        <div className='flex gap-3 justify-end items-center'>
                            <Button className='flex justify-start gap-2 items-center border-2 rounded-md border-lime-500 px-4 py-3 bg-lime-500 text-white font-extrabold'>
                            <MdOutlineFileDownload />
                                <p>Export</p>
                            </Button>
                            <Button className='flex justify-center items-center border-2 border-gray-200 py-4 px-4 rounded-md'>
                                <BsThreeDots />
                            </Button>
                        </div>
                    </div>
                    <Table/>
                    <div className='flex justify-between items-center px-2 py-5 border-2 border-gray-50'>
                        <div className=''>
                            Showing  
                            <select name="list" className='border border-gray-200 p-2 px-0 mx-2 rounded-sm'>
                                <option value="5">5</option>
                                <option value="10">5</option>
                                <option value="15">15</option>
                                <option value="20">15</option>
                            </select>
                            out of {count}
                        </div>

                        <div className='flex justify-between items-center gap-4 '>
                            <button className='flex justify-start items-center gap-2 p-2 border-2 border-gray-200 rounded-md hover:bg-lime-600 hover:text-white'>
                                <FaArrowLeft />
                                Previous
                            </button>
                            {count}
                            <button className='flex justify-start items-center gap-2 p-2 border-2 border-gray-200 rounded-md hover:bg-lime-600 hover:text-white'>
                                Next
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            <NewsBoard/>
        </div>
        <Footerbar/>
          <ReactModal isOpen={modal} data={selectedRow} style={customStyles}>
            <div className="flex justify-between items-center flex-row-reverse">

            <button onClick={handleClick}>
              <IoClose  size={30}/>
            </button>

            <p style={{ fontSize: "1.3rem" }} className="font-extrabold text-lime-500">
              Selected Row:{selectedRow}
              {/* <b style={{ color: "green" }}>{selectedRow?.stockExchangeName}</b> */}
            </p>
            </div>
            <Accordion  stockName={selectedRow}/>
          </ReactModal>
        
</div>
   

  );
};

export default Dashboard;

// Creat new Hooks
