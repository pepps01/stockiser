import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>Login
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/selector"}>Selector</Link>
    </div>
  )
}

export default Login