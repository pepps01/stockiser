import React from "react";

import stocks from "./tableview.json";

function TableSignals() {

  return (
    <table
      className="table table-spaced table-main "
      tabIndex={10}
      style={{
        width:"100%"
      }}
     
    >
      <thead
        style={{
          height: "1vh",
          color: "#000",
          textAlign: "center",
          height: "4rem",
        }}
      >
        <th>Select</th>
        <th style={{textAlign:"left"}}>Ticker</th>
        {/* <th>Logo stx</th> */}
        <th style={{textAlign:"left"}}>Listing Name</th>
        <th style={{textAlign:"left"}}>Current Trade</th>
        <th>Market Capitalisation</th>
        <th style={{textAlign:"center"}} >Status</th>
        <th>Signals</th>
      </thead>
      <tbody
        style={{
          overflowY: "scroll",
        }}
      >
        {/* check if the selected row is active */}
        {stocks.map((stock, index) => (
          <tr style={{}} key={index}>
            <td>
              <input type="checkbox" name={stock.shortName} style={{width:"25%"}}/>
            </td>
            <td
            style={{
              textAlign: "left",
              height: "40px",
              padding: "10px",
            }}
            >{stock.stockExchangeName}</td>
            {/* <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
              }}
            >
              <img src={stock.logo} alt={stock.shortName} width={100} />
            </td> */}
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
              }}
            >
              {stock.shortName}
            </td>
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
              }}
            >
              {stock?.current_trade}%
              {/* {new Int32Array(stock.current_trade) > 5 ? "" : stock.status}% */}
            </td>
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {stock?.capitalisation}
            </td>
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
                textAlign: "center",
                color:`${stock?.status == "Active"? "green":"red"}`
              }}
            >
              {stock?.status}
            </td>
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <a
                href={`financials/${stock.capitalisation}`}
                style={{
                  textDecoration: "none",
                  padding: ".45rem 1rem",
                  color: "#FFF",
                  textAlign: "center",
                  background:  `${stock?.action =="Add Hold" ? 
                        "orange": 
                        "green"}`,
                  cursor: "pointer",
                }}
              >
              {stock?.action}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableSignals;
