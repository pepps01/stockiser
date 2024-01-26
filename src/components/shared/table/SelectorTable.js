import React, { useState } from "react";
import Table from "./Table";

function SelectorTable({ columns, rows,...props }) {
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRowClick = (rowData) => {
      setSelectedRow(rowData);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    console.log("ROWS", rows)
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                {
                    rows.map((row, index)=>(
                        <tr key={index} onClick={() => handleRowClick(row)}>
                            <td>{row.stockExchangeName}</td>
                            <td>{row.status}</td>
                            <td>{row.capitalisation}</td>
                            <td>{row.link}</td>
                        </tr>
                    ))
                }
            </tbody>
      </table>
    </>
  );
}

export default SelectorTable;
