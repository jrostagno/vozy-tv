import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, pageNumbers, nextPage, prevPage }) => {
  return (
    <div className={styles.pagination}>
      <h2 className="fs-4 text-muted">
        Page {currentPage} of {pageNumbers}
      </h2>
      <div className={styles.btnContent}>
        {currentPage !== 1 && (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => prevPage()}
          >
            Previous
          </button>
        )}
        {currentPage !== pageNumbers && (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => nextPage()}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
