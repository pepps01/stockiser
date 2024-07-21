import React, { useState } from 'react'
import Footerbar from '../../../components/common/Footerbar'
import NavigationBar from '../../../components/common/NavigationBar'
import DashboardSidebar from '../../../components/main/DashboardSidebar'
import MainBoard from '../../../components/main/MainBoard'
import NewsBoard from '../../../components/main/NewsBoard'
import SelectorBoard from '../../../components/main/SelectorBoard'

function Select() {
  const [stockName, useStockName] = useState("TSLA")
  const [stockType, useStockType] = useState("Value")

  const url= `/invearn?stock_name=${stockName}&stock_type=${stockType}`
  return (
    <div className='w-full'>
    <NavigationBar/>
      <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
          <DashboardSidebar/>
          <SelectorBoard/>
          <NewsBoard/>
      </div>
      <Footerbar/>
  </div>
  )
}

export default Select