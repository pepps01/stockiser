import React from 'react'

function NewsBoard({...props}) {
  return (
    <div className='sm:flex sm:w-2/12 sm:h-[100vh]  w-0 bg-white px-4 pt-8 sm:flex-col'>
      <div className='font-bold text-xl'>NewsBoard</div>
      <div className=''>Total Added</div>
      <div className=''>Assets Information</div>
    </div>
  )
}

export default NewsBoard