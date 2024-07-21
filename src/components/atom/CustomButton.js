import React from 'react'

function CustomButton({bgColor='green', text="Submit", variant='full', onClick,...props}) {
    
    const color = "white"

    if(variant != 'full'){
        color= bgColor;
        bgColor ="white";
    }

    return (
        <div className={`w-full bg-${bgColor}-500 py-3 rounded-md  hover:bg-red-100 cursor-pointer`} onClick={onClick}>
            <p className={`font-extrabold text-${color} text-center`}>{text}</p>
        </div>
    )

}

export default CustomButton