import React, { useMemo } from "react";

import MOCK_DATA from "./stocks.json";
// import { COLUMNS } from "./columns";
import { useTable, useGlobalFilter, usePagination } from "react-table";

import "./basicTable.css";
import GlobalFilter from "./GlobalFilter";

const PagingTable = ({records, cols,...props}) => {
  const data = useMemo(() => records, []);
  console.log("ROWSSSS",records)
  const columns = useMemo(() => cols, []);

  const tableInstance = useTable(
    { columns, data },
    usePagination,
    GlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    setGlobalFilter,
    pageOptions,
    state,
  } = tableInstance;

  const { globalFilter } = state;
  const { pageIndex } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderGroupProps}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row,i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default PagingTable;
