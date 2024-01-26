import React from 'react'
import { Link } from 'react-router-dom'

function Splash() {
  return (
    <div>
        <h1>Splash</h1>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Splash