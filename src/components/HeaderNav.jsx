import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSubNav from './HeaderSubNav';
import { menuData } from 'src/data/data';
function HeaderNav() {
  const path = window.location.pathname;
  return (
    <div className='navigation-block mr-lg-auto'>
      <ul
        id='menu_pc'
        className='p-0 m-0 menu_pc list-unstyled position-static d-lg-flex justify-content-lg-end'
      >
        {menuData
          .filter(menu => menu.type === 1)
          .map(menuItem => {
            const { id, name, url, children } = menuItem;
            return (
              <li
                key={id}
                className={`level0 position-relative cls ${
                  id === 3 ? 'mega' : ''
                }`}
              >
                <Link
                  to={url}
                  title={name}
                  className={`font-weight-bold d-block pt-2 pb-2 ${
                    children ? 'pr-4' : 'pr-lg-3 pr-2'
                  } position-relative ${url === path ? 'active' : ''}`}
                >
                  {name}
                  {children && (
                    <i className='down_icon align-items-center justify-content-center position-absolute d-none d-lg-block mg'></i>
                  )}
                </Link>
                {id === 3 && <HeaderSubNav menu={children} />}
                {id === 6 && (
                  <ul className='lv1 list-group p-0 list-unstyled'>
                    {children.map(child => (
                      <li
                        key={child.url}
                        className='no level1 pr-lg-3  pl-3 position-relative cls'
                      >
                        <Link
                          to={child.url}
                          className='pt-1 pb-1 pr-1 position-relative js-checkMenu '
                          title={child.name}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}

        {/* <li className='level0 position-relative cls '>
          <Link
            to='/gioi-thieu'
            title='Gi???i Thi???u'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative '
          >
            Gi???i Thi???u
          </Link>
        </li>

        <li className='level0 position-relative cls mega'>
          <Link
            to='/collections/all'
            title='S???n ph???m'
            className='font-weight-bold d-block pt-2 pb-2 pr-4 position-relative '
          >
            S???n ph???m
            <i className='down_icon align-items-center justify-content-center position-absolute d-none d-lg-block mg'></i>
          </Link>
          <HeaderSubNav />
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/he-thong-cua-hang'
            title='H??? th???ng c???a h??ng'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative '
          >
            H??? th???ng c???a h??ng
          </Link>
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/lien-he'
            title='Li??n H???'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative '
          >
            Li??n H???
          </Link>
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/tin-tuc'
            title='Tin T???c'
            className='font-weight-bold d-block pt-2 pb-2 pr-4 position-relative '
          >
            Tin T???c
            <i className='down_icon align-items-center justify-content-center position-absolute d-none d-lg-block mg'></i>
          </Link>
          <ul className='lv1 list-group p-0 list-unstyled'>
            <li className='no level1 pr-lg-3  pl-3 position-relative cls'>
              <Link
                to='/'
                className='pt-1 pb-1 pr-1 position-relative js-checkMenu '
                title='Kinh nghi???m ph???i ?????'
              >
                Kinh nghi???m ph???i ?????
              </Link>
            </li>
            <li className='no level1 pr-lg-3  pl-3 position-relative cls'>
              <Link
                to='/'
                className='pt-1 pb-1 pr-1 position-relative js-checkMenu '
                title='S??? ki???n'
              >
                S??? ki???n
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
      {/* <ul
        id='menu_pc'
        className='p-0 m-0 menu_pc list-unstyled position-static d-lg-flex justify-content-lg-end'
      >
        <li className='level0 position-relative cls '>
          <Link
            to='/'
            title='Trang Ch???'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative active'
          >
            Trang Ch???
          </Link>
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/gioi-thieu'
            title='Gi???i Thi???u'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative '
          >
            Gi???i Thi???u
          </Link>
        </li>

        <li className='level0 position-relative cls mega'>
          <Link
            to='/collections/all'
            title='S???n ph???m'
            className='font-weight-bold d-block pt-2 pb-2 pr-4 position-relative '
          >
            S???n ph???m
            <i className='down_icon align-items-center justify-content-center position-absolute d-none d-lg-block mg'></i>
          </Link>
          <HeaderSubNav />
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/he-thong-cua-hang'
            title='H??? th???ng c???a h??ng'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative '
          >
            H??? th???ng c???a h??ng
          </Link>
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/lien-he'
            title='Li??n H???'
            className='font-weight-bold d-block pt-2 pb-2 pr-lg-3 pr-2 position-relative '
          >
            Li??n H???
          </Link>
        </li>

        <li className='level0 position-relative cls '>
          <Link
            to='/tin-tuc'
            title='Tin T???c'
            className='font-weight-bold d-block pt-2 pb-2 pr-4 position-relative '
          >
            Tin T???c
            <i className='down_icon align-items-center justify-content-center position-absolute d-none d-lg-block mg'></i>
          </Link>
          <ul className='lv1 list-group p-0 list-unstyled'>
            <li className='no level1 pr-lg-3  pl-3 position-relative cls'>
              <Link
                to='/'
                className='pt-1 pb-1 pr-1 position-relative js-checkMenu '
                title='Kinh nghi???m ph???i ?????'
              >
                Kinh nghi???m ph???i ?????
              </Link>
            </li>
            <li className='no level1 pr-lg-3  pl-3 position-relative cls'>
              <Link
                to='/'
                className='pt-1 pb-1 pr-1 position-relative js-checkMenu '
                title='S??? ki???n'
              >
                S??? ki???n
              </Link>
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
}

export default HeaderNav;
