import React, { useState, useMemo, useEffect } from "react";

import "./table_hook.css";
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
    <table className="table-main">
      <thead class="table-head">
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
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
              <td key={column.key}>
                {column.key === "action" ? (
                  <button className="button-hook" onClick={handleRowClick}>{row[column.key]}</button>
                  ) : (
                  row[column.key]
                )}
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
