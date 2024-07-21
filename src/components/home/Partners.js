import React from 'react'
import PartnerCard from '../main/PartnerCard'
import { SiIbm } from "react-icons/si";
import { SiPaperlessngx } from "react-icons/si";
import { CgWindows } from "react-icons/cg";
import { SiMicrosoftaccess } from "react-icons/si";

function Partners() {
  return (
    <div className='w-full  py-4 bg-lime-100 md:py-5'>
      <div className='max-w-[1280px] p-4 mx-auto flex flex-col text-center'>
        <h2 className='mt-2 mb-8 font-bold text-2xl'> In the Pipeline</h2>
        <div className='grid grid-cols-4 text-center max-w-[680px]  mx-auto w-full'>
          <PartnerCard imageIcon={<SiPaperlessngx  size={40}/>} title={"PaperCard"}/>
          <PartnerCard imageIcon={<SiIbm  size={40}/>} title={"IBM"}/>
          <PartnerCard imageIcon={<SiMicrosoftaccess  size={40}/>} title={"Access"}/>
          <PartnerCard imageIcon={<CgWindows  size={40}/>} title={"Windows"}/>
        </div>
      </div>
    </div>
  )
}




export default Partners