import { Img } from '@chakra-ui/react'
import React from 'react'


function PartnerCard({imageIcon, title}) {
  return (
    <div className='px-3 text-center flex flex-col justify-center items-center'>
        {imageIcon}
        <p className='text-center'>{title}</p>
    </div>
  )
}

export default PartnerCard