import React from 'react'
import { MdDashboard } from "react-icons/md";
import { CgSelectO } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdStream } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function DashboardSidebar({...props}) {
  const navigation =useNavigate()
  const handleDashboard =()=>{navigation('/dashboard')}
  const handleSelector =()=>{navigation('/selector')}
  const handleOptimiser =()=>{navigation('/optimiser')}
  const handleAdviser =()=>{navigation('/adviser')}
  const handleHelp =()=>{navigation('/help')}
  const handleLogout =()=>{
    localStorage.removeItem("token")
    navigation('/login')
  }
  
  return (
      <div className='sm:flex sm:w-2/12 sm:flex-col sm:h-[100vh]  bg-white px-4 pt-8 w-0'>
        <div className='w-full'>
            <div onClick={handleDashboard} className='flex justify-start gap-4 items-center font-medium text-md px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800 hover:border-r-lime-600 hover:border-r-4 '>
              <MdDashboard />
                Dashboard Server Handling Declaration
            </div>
            <div onClick={handleSelector} className='text-white flex justify-start gap-4 items-center font-medium text-md px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <CgSelectO size={25}/>
                Selector
            </div>
            <div onClick={handleOptimiser}  className='flex justify-start gap-4 items-center font-medium text-md px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <IoSettingsOutline size={25}/>
                Optimiser
            </div>
            <div onClick={handleAdviser}  className='flex justify-start gap-4 items-center font-medium text-md px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <MdStream size={25} />
                Adviser
            </div>

        <div className='border border--slate-400 w-full  my-5'></div>

            <div onClick={handleHelp}  className='flex justify-start gap-4 items-center font-medium text-md px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <IoHelpCircleOutline size={25} />
                Help & Information
            </div>

            <div onClick={handleLogout} className='flex justify-start gap-4 items-center font-medium text-md px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <TbLogout2 size={25} />
                Logout
            </div>
        </div>
      </div>
  )
}

export default DashboardSidebar