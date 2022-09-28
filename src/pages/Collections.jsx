import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BlogList from 'src/components/BlogList';
import BreadCrumb from 'src/components/BreadCrumb';
import FilterList from 'src/components/FilterList';
import Filter from 'src/components/FilterList';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/components/ProductCard';
import Sort from 'src/components/Sort';
import DefaultLayout from 'src/layouts/DefaultLayout';
import images from 'src/static/images/images';
import { menuData, newsData, productData } from 'src/data/data';
import findRoute from 'src/helpers/findRoute';
import { useEffect } from 'react';
import { useState } from 'react';

function Collections() {
  const newsDataSorted = newsData.sort((a, b) => b.rating - a.rating);
  //   const params = useParams();
  const { search } = useLocation();
  const query = search.replace('?', '');
  const queryList = query.split('&');
  const pageQuery = queryList
    .map(queryItem => {
      const key = queryItem.split('=')[0];
      const value = queryItem.split('=')[1];
      return { key, value };
    })
    .find(item => item.key === 'page');
  const page = pageQuery ? pageQuery.value - 0 : 1;
  const [filter, setFilter] = useState([]);
  const path = window.location.pathname;
  const menuProduct = menuData.find(menu => menu.id === 3);
  const [productList, setProductList] = useState([]);
  const [currentMenu, setCurrentMenu] = useState({});

  console.log(productList);

  useEffect(() => {
    const newMenu = findRoute(path, menuProduct);
    setCurrentMenu(newMenu);
    if (newMenu.categoryId === null) {
      setProductList(productData);
    } else if (newMenu.children) {
      const idList = newMenu.children.map(child => child.categoryId);
      setProductList(
        productData.filter(product => idList.includes(product.categoryId))
      );
    } else {
      setProductList(
        productData.filter(product => product.categoryId === newMenu.categoryId)
      );
    }
  }, [path, menuProduct]);

  return (
    <div className='container'>
      <BreadCrumb from='Trang chủ' to={currentMenu.title || currentMenu.name} />
      <div className='m_colection pt-3'>
        <h1>{currentMenu.title || currentMenu.name}</h1>
        <div className='desc'>{currentMenu.desc}</div>
        <ul className='cate_list w-100 d-none d-lg-flex flex-wrap list-unstyled m-auto sortPagiBar pb-4 border-bottom pt-4'>
          {currentMenu.children &&
            currentMenu.children.map(child => (
              <li key={child.id} className='ml-2 mr-2 mb-2'>
                <Link
                  className=' text-center font-weight-bold text-uppercase text-white line_1'
                  to={child.url}
                >
                  {child.name}
                </Link>
              </li>
            ))}
        </ul>
        <div className='row align-items-baseline mt-3'>
          <div className='col-12 col-lg-9 order-lg-2'>
            <Sort />
            <div className='collection'>
              <div className='category-products position-relative mt-4 mb-4'>
                <div className='row slider-items'>
                  {productList.map(product => (
                    <div
                      key={product.id}
                      className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 product-grid-item-lm'
                    >
                      <ProductCard data={product} />
                    </div>
                  ))}
                </div>
                <Pagination currentPage={page} totalPage={5} />
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3 order-lg-1 stk-pro'>
            <div className='align-items-center'>
              <FilterList filter={filter} setFilter={setFilter} />
              <BlogList
                title='Bài viết nối bật'
                padding={0}
                bg='#fff'
                newsList={newsDataSorted.filter(news => news.categoryId === 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
