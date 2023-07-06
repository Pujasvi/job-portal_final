import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "../../../common/pagination/pagination";





const DataTable = (props) => {
  const { data,buttonRight ,btnStyles , btnClick ,columns ,clickRow} = props || {};
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div>
      <table
        style={{
          width: table.getTotalSize(),
          marginLeft: 200,
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      width: header.getSize(),
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} onClick={()=>clickRow(row.id)}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    width: cell.column.getSize(),
                    textAlign: "center",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
             { buttonRight && <button
                className={btnStyles}
                onClick={() => {
                  btnClick(row.id);
                }}
              >
                view Applications
              </button>}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <div className="pagination-container">
            <Pagination
              handlePrevious={() => table.previousPage()}
              handleNext={() => table.nextPage()}
              pageCount={table.getPageCount()}
              currPage={table.getState()?.pagination?.pageIndex + 1}
            />
          </div>
        </tfoot>
      </table>
    </div>
  );
};

export default DataTable;
