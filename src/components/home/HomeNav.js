import React, { useState, useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";

import { Img } from '@chakra-ui/react';
import Logo from './../../assets/algizer.jpeg'

function HomeNav() {
    const [nav,setNav] = useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }
    return (
        <div className='w-full bg-lime-100 text-white sticky'>
            <div className='flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4  '>
                {/* <h1 className='w-full text-3xl font-bold text-[#000]'>Algizer</h1> */}
                <Img src={Logo} className="rounded-full w-24"/>
                <ul className='sm:flex text-white w-0 gap-8'>
                    <li className='p-4'><a href='/faq' className='text-black  hover:text-lime-700'>Faq</a></li>
                    <li className='p-4'><a href='/register' className='text-black hover:text-lime-700'>Register</a></li>
                    <li className='py-4 px-8 rounded-md hover:bg-white hover:cursor-pointer  bg-lime-500'><a href='/login' className='text-white text-center font-extrabold hover:text-lime-700'>Login</a></li>
                </ul>
                <div onClick={handleNav} className="block md:hidden"> 
                    {!nav? <IoMdMenu size={40} color={'black'}/>: <AiOutlineClose size={40} color={'black'}/>}
                </div>
                <div className={nav? 'fixed left-0 top-0 h-full border-r w-[40%] ease-in-out duration-500': 'fixed left-[-100%]'}>
                        <ul className='pt-24 '>
                            <li className='p-4 border-b border-gray-400'><a>Login</a></li>
                            <li className='p-4 border-b border-gray-400'><a>Register</a></li>
                            <li className='p-4 border-b border-gray-400'><a>Faq</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeNav 