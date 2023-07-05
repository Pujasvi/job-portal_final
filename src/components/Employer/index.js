import React, { useEffect } from "react";
import classes from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getEmployerData } from "./employerAction";
import DataTable from "./data-table/DataTable";

const Employer = () => {
  const employerSelector = useSelector((state) => state.employer);
  const { employerData = [] } = employerSelector || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployerData());
  }, []);


  return (
    <div className={classes.wrapper}>
      {employerData?.length > 0 && (
        <DataTable
          data={employerData}
        />
      )}
    </div>
  );
};

export default Employer;
