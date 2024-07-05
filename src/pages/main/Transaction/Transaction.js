import React from 'react'
import { useNavigate } from "react-router-dom";

import axios from "axios";


function Transaction() {
  const navigate = useNavigate();

  const handleClick =(e)=> {
    e.preventDefault();
    navigate.back()
  }

  return (
    <div>
        <button onClick={handleClick} 
          style={{
            background:"green", 
            color:"white"
          }}
        >Go Back</button>
    </div>
  )
}

export default Transaction