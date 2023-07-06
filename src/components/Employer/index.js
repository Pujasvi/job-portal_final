import React, { useEffect } from "react";
import classes from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getEmployerData } from "./employerAction";
import DataTable from "./data-table/DataTable";
import { useNavigate, useParams } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
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
    size: 250,
    maxSize: 250,
    minSize: 250,
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
    size: 150,
    maxSize: 150,
    minSize: 150,
  }),
];
const Employer = () => {
  const employerSelector = useSelector((state) => state.employer);
  const { employerData = [] } = employerSelector || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getEmployerData());
  }, []);

  const viewAppl = (index) => {
    console.log("pujasvi data", index);
    navigate(`/home/applications/${index}`);
  };

  return (
    <div className={classes.wrapper}>
      {employerData?.length > 0 && (
        <DataTable
          data={employerData}
          buttonRight
          btnStyles={classes.viewApp}
          btnClick={viewAppl}
          columns={columns}
        />
      )}
    </div>
  );
};

export default Employer;
