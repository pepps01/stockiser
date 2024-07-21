import React from 'react'
import { BiCopyright } from "react-icons/bi";

function Footerbar() {
  return (
             <div className='w-full bg-white border-2 absolute bottom-0  sm:flex sm:flex-row sm:justify-between sm:px-16          border-gray-100 flex flex-col gap-4 justify-between items-center py-4'>
                <div className='flex items-center gap-2'>
                    Copyright
                    <BiCopyright />
                    2024
                    Tickizer. All Rghts Reserved
                </div>      
                <div className=''>
                    Private Policy | Terms & Conditions
                </div>          
            </div>
  )
}

export default Footerbar