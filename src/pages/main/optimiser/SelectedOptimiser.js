import React, { useState, useEffect } from 'react'
import { BASEURL } from '../../../apis/api'
import AdminNavbar from '../../../components/admin/AdminNavbar'
import AdminRightBar from '../../../components/admin/AdminRightBar'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import AppNavbar from '../../../components/shared/navbar/Navbar'
import { useNavigate } from "react-router-dom";

import ArrowDown from "./../../../assets/misc/arrow-down-right.svg";
import ArrowUp from "./../../../assets/misc/up-arrow.svg";

import axios  from 'axios'


function SelectedOptimiser() {
  const [records, setRecords] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate();



  const columnites = [
    { name: "Ticker" },
    { name: "Open" },
    { name: "High" },
    { name: "Real Time Price" },
    { name: "Percentage Change" },
    { name: "Date" },
    { name: "Action" },
  ];

  const handleNavigate =()=>{}

  const getBackendData = async () => {
    try {
        const response = await axios.get(`${BASEURL}/api/optimiser/user`,{
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
    const handleNavigation =()=>{
      navigate('/estimate')
    }
    const handleClick = (e) => {
      e.preventDefault();
      // setModal(false);
    };
  
    useEffect(() => {
      getBackendData()
    }, [])

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
              <AppNavbar title="Optimiser" />
              <div className="boardContainer">
              <div className=''>
                <button onClick={handleNavigation}>Estimate Parameter</button>
              </div>
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
                    records.map((record,index) => (
                      <tr key={index}>
                        <td>{record.ticker}</td>
                        <td>{record?.action_taken}</td>
                        <td>{record?.high}</td>
                        <td>{record?.low} <img src={ArrowDown}/></td>
                        <td>{record?.volume}</td>
                        <td>{record?.date}</td>
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
                              onClick={() => handleNavigate(record.id)}
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
          <div className="right-bar-controller">
              <AdminRightBar />
            </div>
        </div>
    </div>
  )
}

export default SelectedOptimiser