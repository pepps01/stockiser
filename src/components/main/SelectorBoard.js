import React, {useState} from 'react'

import { CiCalendar, CiCircleInfo, CiSearch, CiFilter } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";


function SelectorBoard({...props}) {
    const [count, setCount] = useState(20)
    const [stockName, setstockName] = useState("sp500")
    
  return (
    <div className='sm:w-8/12 h-screen '>
    <div className='px-4 bg-slate-50 sm:px-8'>
      <div className='w-full pt-8'>
          <h2 className='font-bold text-2xl sm:font-extrabold sm:text-3xl '>{stockName} Stock </h2>
          {/* subtext */}
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
  
          {/* <div className='border-2 border-gray-300  flex gap-2 items-center py-2 px-4 rounded-md'>
              <CiFilter size={20}/>  <p className='font-extrabold '>Filters</p>
          </div> */}
      </div>

  </div>

        {/* table component */}
        <div className='my-4 rounded-md bg-white border-2 border-gray-100' >
                {/* card title  */}
              <div className='px-4 pt-4 pb-4 border-2  flex justify-between items-center'>
                  <div className='flex gap-2 items-center justify-start'>
                      <h2 className='font-bold text-md'>Stocks to Buy</h2>
                      <CiCircleInfo />
                  </div>
                  {/* <div className='flex gap-3 justify-end items-center'>
                      <button className='flex justify-start gap-2 items-center border-2 rounded-md border-lime-500 px-4 py-3 bg-lime-500 text-white font-extrabold'>
                      <MdOutlineFileDownload />
                          <p>Export</p>
                      </button>
                      <button className='flex justify-center items-center border-2 border-gray-200 py-4 px-4 rounded-md'>
                          <BsThreeDots />
                      </button>
                  </div> */}
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
                  </tbody>
              </table>
          </div>
          
     {/* table component */}
     <div className='my-4 rounded-md bg-white border-2 border-gray-100 mt-8' >
                {/* card title  */}
              <div className='px-4 pt-4 pb-4 border-2  flex justify-between items-center'>
                  <div className='flex gap-2 items-center justify-start'>
                      <h2 className='font-bold text-md'>Stocks to Sell</h2>
                      <CiCircleInfo />
                  </div>
                  {/* <div className='flex gap-3 justify-end items-center'>
                      <button className='flex justify-start gap-2 items-center border-2 rounded-md border-lime-500 px-4 py-3 bg-lime-500 text-white font-extrabold'>
                      <MdOutlineFileDownload />
                          <p>Export</p>
                      </button>
                      <button className='flex justify-center items-center border-2 border-gray-200 py-4 px-4 rounded-md'>
                          <BsThreeDots />
                      </button>
                  </div> */}
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
                  </tbody>
              </table>
          </div>
          
  </div>

  {/* whats new */}

</div>
  )
}

export default SelectorBoard