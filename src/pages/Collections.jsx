import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from 'src/components/BlogList';
import BreadCrumb from 'src/components/BreadCrumb';
import FilterList from 'src/components/FilterList';
import Filter from 'src/components/FilterList';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/components/ProductCard';
import Sort from 'src/components/Sort';
import DefaultLayout from 'src/layouts/DefaultLayout';

function Collections() {
  return (
    <div className='container'>
      <BreadCrumb from='Trang chủ' to='Tất cả sản phẩm' />
      <div className='m_colection pt-3'>
        <h1>Tất cả sản phẩm</h1>
        <div className='desc'>
          Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ
          được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những sản
          phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
        </div>
        <ul className='cate_list w-100 d-none d-lg-flex flex-wrap list-unstyled m-auto sortPagiBar pb-4 border-bottom pt-4'>
          <li className='ml-2 mr-2 mb-2'>
            <Link
              className=' text-center font-weight-bold text-uppercase text-white line_1'
              to='/collections/all'
            >
              Áo thun
            </Link>
          </li>
          <li className='ml-2 mr-2 mb-2'>
            <Link
              className=' text-center font-weight-bold text-uppercase text-white line_1'
              to='/collections/all'
            >
              Quần short
            </Link>
          </li>
          <li className='ml-2 mr-2 mb-2'>
            <Link
              className=' text-center font-weight-bold text-uppercase text-white line_1'
              to='/collections/all'
            >
              Sơ mi dài tay
            </Link>
          </li>
          <li className='ml-2 mr-2 mb-2'>
            <Link
              className=' text-center font-weight-bold text-uppercase text-white line_1'
              to='/collections/all'
            >
              Sơ mi ngắn tay
            </Link>
          </li>
          <li className='ml-2 mr-2 mb-2'>
            <Link
              className=' text-center font-weight-bold text-uppercase text-white line_1'
              to='/collections/all'
            >
              Quần dài
            </Link>
          </li>
        </ul>
        <div className='row align-items-baseline mt-3'>
          <div className='col-12 col-lg-9 order-lg-2'>
            <Sort />
            <div className='collection'>
              <div className='category-products position-relative mt-4 mb-4'>
                <div className='row slider-items'>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                  <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'>
                    <ProductCard />
                  </div>
                </div>
                <Pagination />
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3 order-lg-1 stk-pro'>
            <div className='align-items-center'>
              <FilterList />
              <BlogList title='Bài viết nối bật' padding={0} bg='#fff' />
              <div
                id='open-filters'
                className='open-filters position-fixed d-lg-none'
              >
                <span className='fter d-flex align-items-center justify-content-center text-center position-relative'>
                  <img
                    className='fil_o'
                    src='../static/images/filter.png'
                    alt='Mew Fashion'
                  />
                  <img
                    className='fil_x'
                    src='../static/images/filter_close.png'
                    alt='Mew Fashion'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
