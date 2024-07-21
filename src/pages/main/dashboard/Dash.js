import React from 'react'
import Footerbar from '../../../components/common/Footerbar'
import NavigationBar from '../../../components/common/NavigationBar'
import DashboardSidebar from '../../../components/main/DashboardSidebar'
import MainBoard from '../../../components/main/MainBoard'
import NewsBoard from '../../../components/main/NewsBoard'

function Dash() {
  return (
    <div className='w-full'>
        <NavigationBar/>
        <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
            <DashboardSidebar/>
            <MainBoard/>
            <NewsBoard/>
        </div>
        <Footerbar/>
    </div>
  )
}

export default Dash