import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ currentPage, totalPage }) {
  console.log(currentPage);
  return (
    <ul className='pagination d-flex justify-content-center clearfix mt-4 mb-5'>
      <li className='page-item'>
        <Link
          className='page-link rounded-0 text-center'
          title='Trang trước'
          to={`?page=${currentPage > 1 ? currentPage - 1 : 1}`}
        >
          «
        </Link>
      </li>
      <li className='active page-item disabled'>
        <Link
          className='page-link rounded-0 text-center'
          title={`Trang ${currentPage}`}
          to='#'
        >
          {currentPage}
        </Link>
      </li>
      {currentPage < totalPage && (
        <>
          <li className='page-item'>
            <Link
              className='page-link rounded-0 text-center'
              title='Trang 2'
              to={`?page=${currentPage + 1}`}
            >
              {currentPage + 1}
            </Link>
          </li>
          <li className='page-item'>
            <Link
              className='page-link rounded-0 text-center'
              title='Trang kế'
              to={`?page=${currentPage + 1}`}
            >
              »
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Pagination;
