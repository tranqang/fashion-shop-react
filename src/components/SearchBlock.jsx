import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { show } from 'src/redux/reducers/toggleSlice';
import SearchIcon from './icons/SearchIcon';

function SearchBlock() {
  const searchState = useSelector(state => state.toggle.search);
  const dispatch = useDispatch();
  return (
    <div className='search-block'>
      <Link
        to='#'
        onClick={() => {
          dispatch(show({ key: 'search', value: true }));
          dispatch(show({ key: 'mobile_subnav', value: false }));
        }}
        id='js-search-toggle'
        title='Tìm kiếm'
        className='open_search d-flex p-2 align-items-center justify-content-center'
      >
        <SearchIcon />
      </Link>
      <form
        action='/search'
        method='get'
        id='js-search-form'
        className={`left-search position-relative mt-4 mt-lg-0 pt-1 pb-1 ${
          searchState ? 'open' : ''
        }`}
      >
        <input
          type='text'
          placeholder='Từ khoá...'
          maxLength='70'
          name='query'
          autoComplete='off'
          className='rounded-0 form-control pl-1 pr-5'
          required
        />
        <input type='submit' className='border-0 position-absolute p-0' />
        <div id='searchResult' className='w-100 position-absolute'>
          <Link
            href='/quan-short-m-f-001'
            title='Quần Short M-F 001'
            className='d-flex align-items-center w-100 mb-1 mt-1 result-item'
          >
            <div className='result-item_image p-1 d-flex h-100 align-items-center justify-content-center'>
              <img
                alt='Quần Short M-F 001'
                src='//bizweb.dktcdn.net/thumb/small/100/350/547/products/1-1.jpg?v=1620384211000'
                className='img-fluid'
              />
            </div>
            <div className='result-item_detail pl-2 pr-2'>
              <h4 className='result-item_name mb-1'>Quần Short M-F 001</h4>
              <div className='result-item_price'>
                250.000₫<del className='ml-1 '>275.000₫</del>
              </div>
            </div>
          </Link>
          <Link
            href='/quan-short-m-f-002'
            title='Quần Short M-F 002'
            className='d-flex align-items-center w-100 mb-1 mt-1 result-item'
          >
            <div className='result-item_image p-1 d-flex h-100 align-items-center justify-content-center'>
              <img
                alt='Quần Short M-F 002'
                src='//bizweb.dktcdn.net/thumb/small/100/350/547/products/2-1.jpg?v=1620384212000'
                className='img-fluid'
              />
            </div>
            <div className='result-item_detail pl-2 pr-2'>
              <h4 className='result-item_name mb-1'>Quần Short M-F 002</h4>
              <div className='result-item_price'>
                199.000₫<del className='ml-1 '>249.000₫</del>
              </div>
            </div>
          </Link>
          <Link
            href='/quan-short-m-f-003'
            title='Quần Short M-F 003'
            className='d-flex align-items-center w-100 mb-1 mt-1 result-item'
          >
            <div className='result-item_image p-1 d-flex h-100 align-items-center justify-content-center'>
              <img
                alt='Quần Short M-F 003'
                src='//bizweb.dktcdn.net/thumb/small/100/350/547/products/3-1.jpg?v=1620384212000'
                className='img-fluid'
              />
            </div>
            <div className='result-item_detail pl-2 pr-2'>
              <h4 className='result-item_name mb-1'>Quần Short M-F 003</h4>
              <div className='result-item_price'>
                199.000₫<del className='ml-1 '>249.000₫</del>
              </div>
            </div>
          </Link>
          <Link
            href='/quan-short-m-f-004'
            title='Quần Short M-F 004'
            className='d-flex align-items-center w-100 mb-1 mt-1 result-item'
          >
            <div className='result-item_image p-1 d-flex h-100 align-items-center justify-content-center'>
              <img
                alt='Quần Short M-F 004'
                src='//bizweb.dktcdn.net/thumb/small/100/350/547/products/4-1.jpg?v=1620384523000'
                className='img-fluid'
              />
            </div>
            <div className='result-item_detail pl-2 pr-2'>
              <h4 className='result-item_name mb-1'>Quần Short M-F 004</h4>
              <div className='result-item_price'>
                199.000₫<del className='ml-1 '>249.000₫</del>
              </div>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SearchBlock;
