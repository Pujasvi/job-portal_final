import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./pagination.css";


const Pagination = (props) => {
  const {
    pageCount,
    currPage,
    handleNext,
    handlePrevious,
  } = props;


  return (
    <>
      <div className="pagination">
        <div className="pageBlock" onClick={handlePrevious}>
          <span>{"<<prev"}</span>
        </div>
        <div className="paginationText" >Page {currPage} of {pageCount}</div>
        {/* {[1,2,3,4].map((p) => (
          <div
            key={p}
            onClick={() =>handlePageChange(p)}
            className={`pageBlock ${currPage === p ? "selected" : ""} ${
              p.disable ? "disabled" : ""
            }`}
          >
            {p}
          </div>
        ))} */}
        <div className="pageBlock" onClick={handleNext}>
          <span>{"Next>>"}</span>
        </div>
      </div>
    </>
  );
};

Pagination.defaultProps = {
  footerButtonList: [],
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  footerButtonList: PropTypes.arrayOf(Array),
};

export default Pagination;
