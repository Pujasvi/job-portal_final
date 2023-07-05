import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './pagination.css'; 

const LEN = 7;

const Pagination = (props) => {
  const { pageCount, currPage, onPageChange, footerButtonList } = props;

  const handlePageChange = (p) => {
    if (p >= 1 && p <= pageCount) {
      onPageChange(p);
    }
  };

  const pageList = useMemo(() => {
    if (pageCount <= LEN) {
      return Array.from(Array(pageCount)).map((_, a) => ({
        val: a + 1,
        label: a + 1,
      }));
    }
    const arr = [];
    let pageArr = [];
    for (let i = currPage - LEN + 1; i < currPage + LEN; i++) {
      if (i > 0 && i <= pageCount) {
        arr.push(i);
      }
    }
    const index = arr.findIndex((val) => val === currPage);
    let diff = 1;
    pageArr.push({ val: arr[index], label: arr[index] });
    for (let i = 1; i < LEN && pageArr.length < LEN; i++) {
      if (arr[index + diff]) {
        pageArr.push({ val: arr[index + diff], label: arr[index + diff] });
      }
      if (arr[index - diff]) {
        pageArr.push({ val: arr[index - diff], label: arr[index - diff] });
      }
      diff++;
    }
    pageArr = pageArr.sort((a, b) => a.val - b.val);
    pageArr[0] = { val: 1, label: 1 };
    pageArr[LEN - 1] = { val: pageCount, label: pageCount };
    if (pageArr[1].val !== 2) {
      pageArr[1] = { val: 2, label: '...', disable: true };
    }
    if (pageArr[LEN - 2].val !== pageCount - 1) {
      pageArr[LEN - 2] = { val: pageCount - 1, label: '...', disable: true };
    }
    return pageArr;
  }, [pageCount, currPage]);

  return (
    <>
      <div className="pagination">
        <div
          className="pageBlock"
          onClick={() => handlePageChange(currPage - 1)}
        >
          <span>prev</span>
        </div>
        {pageList.map((p) => (
          <div
            key={p.val}
            onClick={() => !p.disable && handlePageChange(p.val)}
            className={`pageBlock ${currPage === p.val ? 'selected' : ''} ${
              p.disable ? 'disabled' : ''
            }`}
          >
            {p.label}
          </div>
        ))}
        <div
          className="pageBlock"
          onClick={() => handlePageChange(currPage + 1)}
        >
          <span>Next</span>
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