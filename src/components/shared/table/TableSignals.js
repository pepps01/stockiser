import React from "react";

import stocks from "./tableview.json";

function TableSignals() {
  return (
    <table
      className="table table-spaced"
      tabIndex={10}
      style={{
        width: "100%",
        textAlign: "left",
        overflowX: "auto",
        boxShadow: "3px 3px 3px #E5E7EB",
      }}
    >
      <thead
        style={{
          background: "#43BA00",
          color: "#FFF",
          height: "2rem",
          border: "1px solid #43BA00",
          textAlign: "center",
        }}
      >
        <th>Select</th>
        <th>Company</th>
        <th>Logo</th>
        <th>Trade</th>
        <th>Current Trade</th>
        <th>Market Capitalisation</th>
        <th>Signals</th>
      </thead>
      <tbody
        style={{
          overflowY: "scroll",
        }}
      >
        {stocks.map((stock, index) => (
          <tr style={{}} key={index}>
            <td>
              <input type="checkbox" name={stock.shortName}/>
            </td>
            <td>{stock.stockExchangeName}</td>
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
              }}
            >
              <img src={stock.logo} alt={stock.shortName} width={100} />
            </td>
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
              {new Int32Array(stock.status) > 5 ? "" : stock.status}%
            </td>
            <td
              style={{
                verticalAlign: "center",
                height: "40px",
                padding: "10px",
                textAlign: "right",
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
              }}
            >
              <a
                href={`financials/${stock.capitalisation}`}
                style={{
                  textDecoration: "none",
                  padding: ".45rem 1rem",
                  color: "#FFF",
                  textAlign: "center",
                  background: "orange",
                  cursor: "pointer",
                }}
              >
                {" "}
               Hold
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableSignals;
