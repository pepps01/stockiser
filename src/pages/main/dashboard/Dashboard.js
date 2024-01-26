import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to={"/optimiser"}>Optimiser</Link>
        <Link to={"/selector"}>Selector</Link>
        <Link to={"/adviser"}>Adviser</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Dashboard