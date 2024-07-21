import React from 'react'
import Hero from '../../components/home/Hero'
import HomeNav from '../../components/home/HomeNav'
import HowTo from '../../components/home/HowTo'
import Partners from '../../components/home/Partners'
import Pool from '../../components/home/Pool'
import Fundaraiser from '../../components/home/Fundaraiser'
import Footer from '../../components/home/Footer'



function HomePage() {
  return (
   <div className='box-border-0'>
      <HomeNav/>
      <Hero/>
      <Partners/>
      <HowTo/>
      <Pool/>
      {/* <Footer/> */}
    </div>
  )
}

export default HomePage

// grid/ flex/ box
// Width 
// center
// display: hide
// maximum width
// bacground color
// padding
// max0wwtidth in relation to others 