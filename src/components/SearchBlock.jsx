import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productData } from 'src/data/data';
import convertPrice from 'src/helpers/convertPrice';
import { show } from 'src/redux/reducers/toggleSlice';
import SearchIcon from './icons/SearchIcon';

function SearchBlock() {
  const searchState = useSelector(state => state.toggle.search);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleInput = e => {
    if (e.target.value.startsWith(' ')) {
      setInput(e.target.value.trim());
      return;
    }
    setInput(e.target.value);
  };
  useEffect(() => {
    const result = productData.filter(productItem =>
      productItem.name.includes(input)
    );
    if (input.length > 0) {
      setSearchResult(result);
      setOpenSearchResult(true);
    } else {
      setSearchResult(result);
      setOpenSearchResult(false);
    }
  }, [input]);

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
        onSubmit={handleSubmit}
        action='/search'
        method='get'
        id='js-search-form'
        className={`left-search position-relative mt-4 mt-lg-0 pt-1 pb-1 ${
          searchState ? 'open' : ''
        } ${openSearchResult ? 'active' : ''}`}
      >
        <input
          value={input}
          onChange={handleInput}
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
          {searchResult.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              title={product.name}
              className='d-flex align-items-center w-100 mb-1 mt-1 result-item'
            >
              <div className='result-item_image p-1 d-flex h-100 align-items-center justify-content-center'>
                <img alt={product.name} src={product.primary_image[0]} />
              </div>
              <div className='result-item_detail pl-2 pr-2'>
                <h4 className='result-item_name mb-1'>{product.name}</h4>
                <div className='result-item_price'>
                  {convertPrice(product.averagePrice)}
                  <del className='ml-1 '>
                    {convertPrice(product.averageOldPrice)}
                  </del>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SearchBlock;
