import React from 'react'
import Footerbar from '../common/Footerbar'
import NavigationBar from '../common/NavigationBar'

function LoginLayout({children, ...props}) {
  return (
    <div className='w-full h-[100vh] bg-gray-100'>
        <NavigationBar/>
        <div className='w-full'>
            <div className='mx-auto w-[480px] px-8 py-4 shadow-lg shadow-gray-200 bg-white mt-8'>
                {children}
            </div>
        </div>
        <Footerbar/>
    </div>
  )
}

export default LoginLayout