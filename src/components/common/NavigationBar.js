import React, {useState} from 'react'
import Logo from './../../assets/algizer.jpeg'
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from "react-icons/ai";
import {  Img } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Profileimage from "./../../assets/avatar.png";

function NavigationBar() {
    const [nav,setNav] = useState(false)
    const navigation = useNavigate()
    const handleNav =()=>{
        setNav(!nav)
    }
    const handleClick =()=>{
            navigation('/')
        }
        
        const handleProfile =()=>{
                navigation('/profile')
        }
  return (
        <>
        
        <nav className='w-full bg-white'>
             <div className='flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4  '>

            <Img src={Logo} className="rounded-full w-20 hover:cursor-pointer" onClick={handleClick}/>

            <div className='flex flex-col justify-center items-center cursor-pointer' onClick={handleProfile} >
                         <img src={Profileimage} alt='profile' className='overflow-hidden self-center' style={{width:50, height:50}}/>
                        <div className=''>My Profile</div>
            </div>
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
            
        </>
  )
}

export default NavigationBar