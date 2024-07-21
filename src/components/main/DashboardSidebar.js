import React from 'react'
import { MdDashboard } from "react-icons/md";
import { CgSelectO } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdStream } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

function DashboardSidebar({...props}) {
  return (
      <div className='sm:flex sm:w-2/12 sm:flex-col sm:h-[100vh] w-0 bg-white px-4 pt-8 '>
        <div className='w-full'>
            <div className='flex justify-start gap-4 items-center font-medium text-xl px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800 hover:border-r-lime-600 hover:border-r-4'>
              <MdDashboard />
                Dashboard
            </div>
            <div className='flex justify-start gap-4 items-center font-medium text-xl px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <CgSelectO size={25}/>
                Selector
            </div>
            <div className='flex justify-start gap-4 items-center font-medium text-xl px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <IoSettingsOutline size={25}/>
                Optimiser
            </div>
            <div className='flex justify-start gap-4 items-center font-medium text-xl px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <MdStream size={25} />
                Adviser
            </div>

        <div className='border border--slate-400 w-full  my-5'></div>

            <div className='flex justify-start gap-4 items-center font-medium text-xl px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <IoHelpCircleOutline size={25} />
                Help & Information
            </div>

            <div className='flex justify-start gap-4 items-center font-medium text-xl px-1 py-4 hover:cursor-pointer hover:bg-lime-50 hover:text-lime-800  hover:border-r-lime-600 hover:border-r-4'>
              <TbLogout2 size={25} />
                Logout
            </div>
        </div>
        {/* <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Selector</a></li>
            <li><a href="">Optimiser</a></li>
            <li><a href="">Advisor</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Logout</a></li>
        </ul> */}
      </div>
  )
}

export default DashboardSidebar