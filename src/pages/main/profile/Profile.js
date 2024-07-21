import React from 'react'
import Footerbar from '../../../components/common/Footerbar'
import NavigationBar from '../../../components/common/NavigationBar'
import DashboardSidebar from '../../../components/main/DashboardSidebar'
import NewsBoard from '../../../components/main/NewsBoard'
import ProfileBoard from '../../../components/main/ProfileBoard'

function Profile() {
  return (
    <div className='w-full'>
    <NavigationBar/>
      <div className='w-screen h-screen sm:flex sm:justify-start sm:items-center flex bg-slate-50'> 
          <DashboardSidebar/>
          <ProfileBoard/>
          {/* <NewsBoard/> */}
      </div>
      <Footerbar/>
  </div>
  )
}

export default Profile