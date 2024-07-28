import { Img } from '@chakra-ui/react'
import React from 'react'
import Logo from './../../assets/algizer.jpeg'

function Footer() {
  return (
    <div className='w-full  bg-black text-white sm:py-4 absolute bottom-0 sm:hidden'>
        <div className='max-w-[1280px] p-4 mx-auto grid grid-row-3  text-center sm:flex sm:justify-around sm:items-center'>
            <div className='w-full p-2 mx-auto cursor-pointer md:cursor-auto'>
              <a href='/about-us'>About Us</a>
            </div>
            <div className='w-full p-2 mx-auto cursor-pointer md:cursor-auto'>
              <a href='/about-us'>Terms of Service</a>
            </div>
            <div className='w-full p-2 mx-auto cursor-pointer md:cursor-auto'>
              <p>Copyright @ 2024</p>
            </div>
            <div className='hidden md:block'>
              <Img src={Logo} width={50}/>
            </div>
        </div>
    </div>
  )
}

export default Footer