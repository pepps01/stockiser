import React, { useState } from "react";

import stocks from "./stocks.json";


function Table() {
  // const { modal, setModal } = useState(false);

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <table
      className="userdetails table table-spaced space-table"
      tabIndex={10}
      width={"100%"}
    >
      <thead>
        <tr style={{paddingTop: "10px", paddingRight:"10px"}} >
          <th>S/N</th>
          <th>Ticker</th>
          <th>Trade Name</th>
          <th>Current Trade</th>
          <th>Market Capitalisation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => (
          <tr style={{paddingTop: "10px", paddingRight:"10px"}} key={index}>
            <td style={{paddingTop: "10px", paddingRight:"10px"}} >{index + 1}</td>
            <td style={{paddingTop: "10px", paddingRight:"10px"}} >{stock.stockExchangeName}</td>
            <td style={{paddingTop: "10px", paddingRight:"10px"}} >{stock.shortName}</td>
            <td style={{paddingTop: "10px", paddingRight:"10px"}} >{new Int32Array(stock.status) > 5 ? "" : stock.status}%</td>
            <td style={{paddingTop: "10px", paddingRight:"10px"}} >{stock?.capitalisation}</td>
            <td style={{paddingTop: "10px", paddingRight:"10px"}} >
              <a
                href={`financials/${stock.capitalisation}`}
                style={{
                  textDecoration: "none",
                  padding: ".45rem 1rem",
                  color: "#FFF",
                  textAlign: "center",
                  background: "green",
                  cursor: "pointer",
                  display:"inline-block",
                  borderRadius:"5px"
                }}
                onClick={handleOpenClick}
              >
                {" "}
                Get Financials
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
