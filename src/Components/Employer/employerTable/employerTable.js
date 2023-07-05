import React, { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { styles } from "../employerTable/employerTable.module.css";
import Pagination from "../../../common/pagination/pagination";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.job_description, {
    id: "job_description",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>job_description</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("company_name", {
    header: () => "company_name",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("contact_info_phone", {
    header: () => <span>contact_info_phone</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("contact_info_email", {
    header: "contact_info_email",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("applications", {
    header: "applications",
    footer: (info) => info.column.id,
  }),
];


const EmployerTable = ({ data ,currPage , changePage , pageCount}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
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
