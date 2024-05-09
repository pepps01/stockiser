import React, { useState } from 'react'

function Ranger() {
  const [stockName, useStockName] = useState("TSLA")
  const [stockType, useStockType] = useState("Value")

  const url= `/invearn?stock_name=${stockName}&stock_type=${stockType}`
  return (
    <div style={{background:"light-grey"}}>

      <h1>Renger</h1>
      <a href={url}>Click to Review</a>
    </div>
  )
}

export default Ranger