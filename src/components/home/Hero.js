import { Button } from '@chakra-ui/react'
import React from 'react'

function Hero() {
      return (
      <div className='w-full py-14 bg-lime-50  p-4 flex items-center justify-center md:py-10'>
          <div className='max-w-[800px] p-4 mx-auto text-center flex flex-col md:py-14'>
                <h2 className='font-extrabold px-2 text-2xl sm:text-4xl '>Capital Market Adviser</h2>
                <p className='sm:text-xl  mb-5 mt-2'>Market Financial Performance Data. Whether its pooling resources with family, rallying with friends or collaborating with like-minded, our platform offers the best way to invest </p>
                <button className='bg-lime-500 mx-auto px-8 py-4  rounded-md mt-4 font-bold text-white  md:max-w-[20]'>Get Started</button>
            </div>
        </div>
  )
}

export default Hero