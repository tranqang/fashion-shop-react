import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';
import FilterItem from './FilterItem';
const filterListDisplay = [
  {
    title: 'Thương hiệu',
    items: [
      {
        key: 'mew-fashion',
        value: 'Mew Fashion',
      },
    ],
  },
  {
    title: 'Lọc giá',
    items: [
      {
        key: '<100',
        value: 'Giá dưới 100.000đ',
      },
      {
        key: '100-200',
        value: '100.000đ - 200.000đ',
      },
      {
        key: '200-500',
        value: '200.000đ - 500.000đ',
      },
      {
        key: '500-1000',
        value: '500.000đ - 1.000.000đ',
      },
      {
        key: '1000-2000',
        value: '1.000.000đ - 2.000.000đ',
      },
      {
        key: '>2000',
        value: 'Giá trên 2.000.000đ',
      },
    ],
  },
  {
    title: 'Thể loại',
    items: [
      { key: 'ao-thun', value: 'Áo thun' },
      { key: 'quan-short', value: 'Quần short' },
      { key: 'so-mi', value: 'Sơ mi' },
    ],
  },
];
function FilterList() {
  return (
    <div className='sidebar sidebar_mobi m-0 pt-1 pb-1 pl-2 pr-2 p-lg-0'>
      <div className='filter-container__selected-filter mb-3'>
        <div className='filter-container__selected-filter-header d-flex clearfix'>
          <span className='filter-container__selected-filter-header-title'>
            LỌC THEO:
          </span>
          <Link
            to='#'
            className='filter-container__clear-all text-danger ml-auto'
          >
            Xóa tất cả
          </Link>
        </div>
        <ul className='filter-container__selected-filter-list pl-0 pt-2 pb-2 m-0 mb-2 list-unstyled d-block w-100'>
          <li
            className='filter-container__selected-filter-item pr-1 d-inline-flex align-items-center mr-1 mb-2'
            htmlFor='filter-mew-fashion'
          >
            <Link to='#'>
              <img src={images.closeIcon} alt='' />
              Mew Fashion
            </Link>
          </li>
        </ul>
      </div>
      <div className='aside-filter'>
        <div className='filter-container'>
          {filterListDisplay.map((filterItem, index) => (
            <FilterItem
              key={index}
              title={filterItem.title}
              items={filterItem.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterList;
