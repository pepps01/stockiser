import React, { useEffect, useState } from 'react'
import { buyList } from '../../../apis/main'

import "./style.css"
import { Link } from 'react-router-dom'

const Selector =()=> {
  const [arrange, setArrange] = useState("")
    useEffect(() => {
        buyList()
        setArrange("Welcome")
    }, [])

    // const engage = useMemo()
  return (
    <div>
        <p>Selector:{arrange&&arrange}</p>
        <Link to={"/optimiser"}>Optimiser</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/adviser"}>Adviser</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Selector