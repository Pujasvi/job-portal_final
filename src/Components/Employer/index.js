import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getEmployerData } from "./employerAction";
import EmployerTable from "./employerTable/employerTable";

const Employer = () => {
  const employerSelector = useSelector((state) => state.employer);
  const { employerData = [] } = employerSelector || {};
  const [paginatedData, setPaginatedData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployerData());
  }, []);
  useEffect(() => {
    setPaginatedData(employerData.slice(0, 20));
    let count = employerData.length / 20;
    setPageCount(count > 1 ? count  : 1);
  }, [employerData]);

  const changePage = (page) => {
    setCurrPage(page);
    setPaginatedData(employerData.slice((page - 1) * 20, (page - 1) * 20 + 20));
  };

  return (
    <div className={classes.wrapper}>
      {employerData?.length > 0 && (
        <EmployerTable
          data={paginatedData}
          changePage={changePage}
          currPage={currPage}
          pageCount={pageCount}
        />
      )}
    </div>
  );
};

export default Employer;
