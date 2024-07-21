import React from 'react'

function NewsBoard({...props}) {
  return (
    <div className='sm:flex sm:w-2/12 sm:h-[100vh]  sm:bg-white sm:px-4 sm:pt-8 sm:flex-col  w-0'>
      <div className='font-bold text-xl'>NewsBoard</div>
      <div className=''>Total Added</div>
      <div className=''>Assets Information</div>
    </div>
  )
}

export default NewsBoard