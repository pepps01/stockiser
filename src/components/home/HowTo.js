import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import PartnerCard from '../main/PartnerCard'
import { FaHandsHelping } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { GiTrade } from "react-icons/gi";

function HowTo() {
  return (
    <div className='w-full md:py-14'>
         <div className='max-w-[1280px]  p-2 mx-auto "'>
            <h2 className='font-bold text-2xl text-center mt-2 mb-4'>How to Connect </h2>

            <div className=' grid grid-cols-1 md:grid-cols-3 w-full px-2 justify-center items-center md:justify-center'>
                <Card maxW='sm' className='p-1 m-3 '>
                    <CardHeader className='flex items-center mb-2'>
                        <GiTrade className='text-green-500 text-2xl'/> <Heading size='md' className='font-bold ml-2 sm:text-xl'>Selector</Heading>
                    </CardHeader>
                    <CardBody className='mt-2'>
                        <Text>Required to Pick Stock Exchange of interest, due to historical period of market data, execute and save tickets in a specified rank</Text>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='p-1  m-3'>
                    <CardHeader className='flex items-center mb-2'>
                         <SiCoinmarketcap className='text-green-500 text-2xl'/> <Heading size='md' className='font-bold ml-2 sm:text-xl'>Optimiser</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Specify historical period of market data for adviser training and execute adivser tuning. Whilst saving the list of optimised parameter</Text>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='p-1  m-3'>
                     <CardHeader className='flex items-center mb-2'>
                         <FaHandsHelping  className='text-green-500 text-2xl'/> <Heading size='md' className='font-bold ml-2 sm:text-xl'>Adviser</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Specify time interval to monitor the market and recieve next advice, whilst display color to decide the tickets to trade</Text>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default HowTo