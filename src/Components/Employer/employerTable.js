import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


// {
//   job_description:
//     "sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis",
//   "requirements ": "c#",
//   id: 1,
//   company_name: "Convallis Dolor Inc.",
//   contact_info_phone: "1-801-342-7819",
//   contact_info_email: "gravida.non.sollicitudin@outlook.org",
//   applications: 100,
// },
// type Person = {
//   job_description:string
//   company_name: string
//   id: number
//   contact_info_phone: number
//   applications: number
//   contact_info_email:string
// }

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.job_description, {
    id: 'job_description',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>job_description</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('company_name', {
    header: () => 'company_name',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('contact_info_phone', {
    header: () => <span>contact_info_phone</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('contact_info_email', {
    header: 'contact_info_email',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('applications', {
    header: 'applications',
    footer: info => info.column.id,
  }),
]
const EmployerTable =({data}) =>{
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="p-2">
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
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
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    </div>
  )
}

export default EmployerTable;