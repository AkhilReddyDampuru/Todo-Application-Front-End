import React from "react";
import ReactPaginate from "react-paginate";
import "../css/pagination.css";
function Pagination({ handlePageClick, pageCount, currentPage }) {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={({ selected }) => handlePageClick(selected)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        forcePage={currentPage - 1}
      />
    </div>
  );
}

export default Pagination;
