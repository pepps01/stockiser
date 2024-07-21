import React, {useState} from 'react'
import Logo from './../../assets/algizer.jpeg'
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from "react-icons/ai";
import {  Img } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


function NavigationBar() {
    const [nav,setNav] = useState(false)
    const navigation = useNavigate()
    const handleNav =()=>{
        setNav(!nav)
    }
    const handleClick =()=>{
            navigation('/')
    }
  return (
        <>
        
        <nav className='w-full bg-white'>
             <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  '>

            <Img src={Logo} className="rounded-full w-20 hover:cursor-pointer" onClick={handleClick}/>
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
        </nav>
            {/* <nav className='w-full bg-black mb-12'>
            <div className=' mx-auto max-w-[1280px] flex justify-between items-center p-4'>
                <img src={require("./../../assets/algizer.png")} alt='tickizer logo' className='rounded-md w-40 max-h-10'/>
                <ul className='flex justify-between items-center gap-8'>
                   <li className='cursor-pointer'>
                        <a href="/login" className='font-medium text-lg'>Login</a>
                    </li> 
                    <li className='cursor-pointer'>
                        <a href="/register" className='font-medium text-lg'>Register</a>
                    </li> 
                </ul>
            </div>
            </nav> */}
        </>
  )
}

export default NavigationBar