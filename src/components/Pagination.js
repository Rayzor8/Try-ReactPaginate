import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const devidePaginate = Math.ceil(totalPosts / postPerPage);
  const changePage = ({ selected }) => {
    console.log(selected)
    paginate(selected );
  };
  return (
    <nav>
      <ReactPaginate
        className="page-link"
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={devidePaginate}
        onPageChange={changePage}
        pageRangeDisplayed={20}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
      />
    </nav>
  );
}
