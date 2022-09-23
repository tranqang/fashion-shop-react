import React from 'react';
import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <ul className='pagination d-flex justify-content-center clearfix mt-4 mb-5'>
      <li className='page-item disabled'>
        <Link
          className='page-link rounded-0 text-center'
          title='Trang trước'
          to='/collections/all'
        >
          «
        </Link>
      </li>
      <li className='active page-item disabled'>
        <Link
          className='page-link rounded-0 text-center'
          title='Trang 1'
          to='/collections/all'
        >
          1
        </Link>
      </li>
      <li className='page-item'>
        <Link
          className='page-link rounded-0 text-center'
          title='Trang 2'
          to='/collections/all'
        >
          2
        </Link>
      </li>
      <li className='page-item'>
        <Link
          className='page-link rounded-0 text-center'
          title='Trang kế'
          to='/collections/all'
        >
          »
        </Link>
      </li>
    </ul>
  );
}

export default Pagination;
