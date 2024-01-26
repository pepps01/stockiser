import React from 'react'
import { Link } from 'react-router-dom'

function Adviser() {
  return (
    <div>
        <h1>Adviser</h1>
        <Link to={"/selector"}>Selector</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/optimiser"}>Optimiser</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Adviser