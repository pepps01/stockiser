import React, {useState,useEffect} from 'react'
import Footerbar from '../../../components/common/Footerbar'
import NavigationBar from '../../../components/common/NavigationBar'
import DashboardSidebar from '../../../components/main/DashboardSidebar'
import NewsBoard from '../../../components/main/NewsBoard'
// import ProfileBoard from '../../../components/main/ProfileBoard'
import Profileimage from "./../../../assets/avatar.png";

import { useNavigate } from "react-router-dom";

import ArrowDown from "./../../../assets/misc/arrow-down-right.svg";
import ArrowUp from "./../../../assets/misc/up-arrow.svg";
import axios from "axios";


import { CiCalendar, CiCircleInfo, CiSearch, CiFilter } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import { BASEURL } from '../../../apis/api'
function Profile() {
  const [count,setCount]=useState(20)
  const [modal, setModal] = useState(false);
  const [name, setName] = useState({
    "firstname":"Sunny",
    "lastname":"Pepple",
    "valuation": 6, 
    "assets": 50
  }); 
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
      navigate("/dashboard");
    }
  }, [redirectPage]);

  return (
    <div className='w-full'>
    <NavigationBar/>
      <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
          <DashboardSidebar/>

          <div className='sm:w-9/12 h-screen '>
      <div className='px-4 bg-slate-50 sm:px-8'>
            <div className='w-full pt-8'>
                <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl '>Profile</h2>
                {/* subtext */}
            </div>
            <div className='flex justify-start items-start mt-4 gap-4 '>
                {/* profile head */}
                <div className='w-1/5 bg-white flex flex-col py-4 gap-8'>
                    <img src={Profileimage} alt='profile' className='overflow-hidden self-center' style={{width:200, height:200}}/>
                    <button className='bg-lime-500 px-2 py-4 text-white mx-16 rounded-md'>Edit Profile</button>

                    <div className='flex w-full  border-t-2 border-slate-50 pt-4 '>
                        <div className='w-1/2 border-r-slate-400 flex flex-col'>
                            <div className='text-center'>Total Asset Valuation</div>
                            <div className='text-center font-bold  text-lg'>10</div>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='text-center'>Total Assets</div>
                            <div className='text-center font-bold text-lg'>120</div>
                        </div>
                    </div>
                </div>

                {/* table */}
                <div className='w-4/5 bg-white'>
                    <div className='p-4   flex justify-between items-center'>
                            <div className='flex gap-2 items-center justify-start'>
                                <h2 className='font-bold text-md'>Purchase List</h2>
                                <CiCircleInfo />
                            </div>
                            <div className='flex gap-3 justify-end items-center'>
                                <button className='flex justify-start gap-2 items-center border-2 rounded-md border-lime-500 px-4 py-3 bg-lime-500 text-white font-extrabold'>
                                <MdOutlineFileDownload />
                                    <p>Export</p>
                                </button>
                                <button className='flex justify-center items-center border-2 border-gray-200 py-4 px-4 rounded-md'>
                                    <BsThreeDots />
                                </button>
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
                            {records &&
                                records.map((item,index) => (
                                  <tr key={index}>
                                    <td className='font-medium py-4  text-left pl-4'>{item.stock}</td>
                                    <td className='font-medium py-4  text-left pl-4'>{item?.action_taken}</td>
                                    <td className='font-medium py-4  text-left pl-4'>{item?.amount}</td>
                                    <td className='font-medium py-4  text-left pl-4 flex justify-center items-center gap-4'>{item?.transaction_reference} <img src={ArrowDown}/></td>
                                    <td className='font-medium py-4  text-left pl-4'>{item?.transaction_name}</td>
                                    <td className='font-medium py-4  text-left pl-4'>{item?.date_added}</td>
                                    <td className='font-medium py-4  text-left pl-4'
                                    >
                                      <button
                                          className="buttonFinancials font-bold bg-lime-500"
                                          style={{
                                            padding: "8px 15px",
                                            border: "none",
                                            color: "white",
                                            textAlign: "center",
                                            textDecoration: "none",
                                            borderRadius: "5px",
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
                    {/* pagination */}
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
    </div>
          {/* <NewsBoard/> */}
      </div>
      <Footerbar/>
  </div>
  )
}

export default Profile