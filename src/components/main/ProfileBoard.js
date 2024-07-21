import React, {useState} from 'react'
import Profileimage from "./../../assets/avatar.png";


import { CiCalendar, CiCircleInfo, CiSearch, CiFilter } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

function ProfileBoard() {
    const [count, setCount] = useState(20)

  return (
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
                                <th className='py-4 text-left pl-4'>Listing Name</th>
                                <th className='py-4 text-left pl-4'>Volume*</th>
                                <th className='py-4 text-left pl-4'>Market Cap</th>
                                <th className='py-4 text-left pl-4'>Change</th>
                                <th className='py-4 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>NasDaQ</td>
                                <td className='font-medium py-2  text-left pl-4'>200</td>
                                <td className='font-medium py-2  text-left pl-4'>200</td>
                                <td className='font-medium py-2  text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Dow</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Russell</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Modern Open Space</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Modern Open Space</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Modern Open Space</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Modern Open Space</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Modern Open Space</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-medium py-4  text-left pl-4'>Modern Open Space</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='font-medium   text-left pl-4'>200</td>
                                <td className='py-4 flex justify-center items-center'>
                                    <BsThreeDots/>
                                </td>
                            </tr>

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
  )
}

export default ProfileBoard