import React, { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import  styles  from "../employerTable/employerTable.module.css";
import Pagination from "../../../common/pagination/pagination";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    size: 50,
    maxSize: 50,
    minSize: 50,
  }),
  columnHelper.accessor((row) => row.job_description, {
    id: "job_description",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>job_description</span>,
    footer: (info) => info.column.id,
    size: 200,
    maxSize: 200,
    minSize: 200,
  }),
  columnHelper.accessor("company_name", {
    header: () => "company_name",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 200,
    maxSize: 200,
    minSize: 200,
  }),
  columnHelper.accessor("contact_info_phone", {
    header: () => <span>contact_info_phone</span>,
    footer: (info) => info.column.id,
    size: 150,
    maxSize: 150,
    minSize: 150,
  }),
  columnHelper.accessor("contact_info_email", {
    header: "contact_info_email",
    footer: (info) => info.column.id,
    size: 250,
    maxSize: 250,
    minSize: 250,
  }),
  columnHelper.accessor("applications", {
    header: "applications",
    footer: (info) => info.column.id,
    size: 75,
    maxSize: 75,
    minSize: 75,
  }),
];

const EmployerTable = ({ data, currPage, changePage, pageCount }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table
        style={{
          width: table.getTotalSize()+300,
          marginLeft: 100,
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
            <tr key={row.id}>
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
              <button className={styles.viewApp}>view Applications</button>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <div className="pagination-container">
            <Pagination
              pageCount={pageCount}
              currPage={currPage}
              onPageChange={changePage}
            />
          </div>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployerTable;
