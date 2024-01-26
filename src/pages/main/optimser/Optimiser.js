import React from 'react'
import { Link } from 'react-router-dom'

const Optimiser =()=> {
  return (
    <div>
        <h1>Optimiser</h1>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/selector"}>Selector</Link>
        <Link to={"/adviser"}>Adviser</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Optimiser