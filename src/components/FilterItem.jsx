import React from 'react';

function FilterItem({ title, items }) {
  return (
    <aside className='aside-item filter-price mb-3 bg-white'>
      <div className='h2 title-head m-0 pt-2 pb-2 font-weight-bold'>
        {title}
      </div>
      <div className='aside-content filter-group'>
        <ul className='list-unstyled m-0'>
          {items.map(item => {
            return (
              <li
                key={item.key}
                className='filter-item filter-item--check-box '
              >
                <label
                  className='d-flex align-items-baseline pt-1 pb-1 m-0'
                  htmlFor={item.key}
                >
                  <input type='checkbox' id={item.key} className='d-none' />
                  <i className='fa position-relative mr-2' /> {item.value}
                </label>
              </li>
            );
          })}

          {/* <li className='filter-item filter-item--check-box '>
            <label
              className='d-flex align-items-baseline pt-1 pb-1 m-0'
              htmlFor='filter-100-000d-200-000d'
            >
              <input
                type='checkbox'
                id='filter-100-000d-200-000d'
                className='d-none'
                onchange='toggleFilter(this)'
                data-group='Khoảng giá'
                data-field='price_min'
                data-text='100.000đ - 200.000đ'
                defaultValue='(>99999 AND <200001)'
                data-operator='OR'
              />
              <i className='fa position-relative mr-2' /> 100.000đ - 200.000đ
            </label>
          </li>
          <li className='filter-item filter-item--check-box '>
            <label
              className='d-flex align-items-baseline pt-1 pb-1 m-0'
              htmlFor='filter-200-000d-500-000d'
            >
              <input
                type='checkbox'
                id='filter-200-000d-500-000d'
                className='d-none'
                onchange='toggleFilter(this)'
                data-group='Khoảng giá'
                data-field='price_min'
                data-text='200.000đ - 500.000đ'
                defaultValue='(>199999 AND <500001)'
                data-operator='OR'
              />
              <i className='fa position-relative mr-2' /> 200.000đ - 500.000đ
            </label>
          </li>
          <li className='filter-item filter-item--check-box '>
            <label
              className='d-flex align-items-baseline pt-1 pb-1 m-0'
              htmlFor='filter-500-000d-1000000d'
            >
              <input
                type='checkbox'
                id='filter-500-000d-1000000d'
                className='d-none'
                onchange='toggleFilter(this)'
                data-group='Khoảng giá'
                data-field='price_min'
                data-text='500.000đ - 1000000đ'
                defaultValue='(>499999 AND <1000001)'
                data-operator='OR'
              />
              <i className='fa position-relative mr-2' /> 500.000đ - 1000000đ
            </label>
          </li>
          <li className='filter-item filter-item--check-box '>
            <label
              className='d-flex align-items-baseline pt-1 pb-1 m-0'
              htmlFor='filter-1000000d-2000000d'
            >
              <input
                type='checkbox'
                id='filter-1000000d-2000000d'
                className='d-none'
                onchange='toggleFilter(this)'
                data-group='Khoảng giá'
                data-field='price_min'
                data-text='1000000đ - 2000000đ'
                defaultValue='(>999999 AND <2000001)'
                data-operator='OR'
              />
              <i className='fa position-relative mr-2' /> 1000000đ - 2000000đ
            </label>
          </li>
          <li className='filter-item filter-item--check-box '>
            <label
              className='d-flex align-items-baseline pt-1 pb-1 m-0'
              htmlFor='filter-tren2000000d'
            >
              <input
                type='checkbox'
                id='filter-tren2000000d'
                className='d-none'
                onchange='toggleFilter(this)'
                data-group='Khoảng giá'
                data-field='price_min'
                data-text='Trên 2000000đ'
                defaultValue='(>2000000)'
                data-operator='OR'
              />
              <i className='fa position-relative mr-2' /> Giá trên 2000000đ
            </label>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}

export default FilterItem;
