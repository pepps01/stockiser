import React, { useState, useMemo, useEffect } from "react";

import "./table_hook.css";
import { FaAngleDown } from "react-icons/fa";

export const useTableHook = (columns, initialData, itemsPerPage, handleRowClick) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return columns.some((column) => {
        return String(row[column.key])
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    });
  }, [data, columns, search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Table = () => (
    <table className="w-full border-collapse table-auto bg-white'">
      <thead class=" bg-slate-100">
        <tr className=''>
          {columns.map((column) => (
            <th key={column.key} className='py-4 text-left pl-4'>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((row, index) => (
          <tr
            key={index}
            style={{
              padding: "2.5rem 0rem",
            }}
          >
            {columns.map((column, index) => (
              <td key={column.key} className='font-medium py-4  text-left pl-4'>
                {column.key === "action" ? (
                   <button 
                   className="border-2 border-lime-700 text-lime-700 rounded px-2 py-2 hover:bg-lime-600 hover:text-white" 
                    onClick={()=> handleRowClick(row.listing_name)}>
                    {row[column.key]}
                   </button>
                  ) : column.key ==="symbol"?(
                    <img src={require("./../assets/goat/dowImage.png")} alt="image" className="rounded " style={{width:"40%", height:"50px"}}/>
                  ):
                   (row[column.key])
                   }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return {
    Table,
    search,
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
    setData,
  };
};
