import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function MobileSubNavItem({ open, menu, index, setOpenIndex }) {
  return (
    <li
      onClick={() => setOpenIndex(index)}
      className={`level0 d-block w-100 position-static ${open ? 'open' : ''}`}
    >
      <Link
        to='#'
        title='Áo thun'
        className='position-relative d-flex js-submenu-1 flex-column justify-content-center align-items-center text-center p-2'
      >
        <img
          className='lazy d-block pb-2 m-auto loaded'
          src={images[menu.icon]}
          alt='Áo thun'
        />
        <span className='line_1 line_2'>{menu.name}</span>
      </Link>
      <ul className='lv1 p-1 position-absolute h-100 m_chill  bg-white'>
        {menu.children.map(child => (
          <li key={child.id} className='level1 position-relative mb-1'>
            <Link
              to={child.url}
              className='ratio4by3 position-relative has-edge aspect d-block modal-open'
            >
              <img
                src={images[child.image]}
                className='d-block img position-absolute w-100 h-100 lazy loaded'
                alt={child.name}
              />

              <span
                className='pt-1 position-absolute text-uppercase mr-2 ml-2 align-items-center font-weight-bold '
                title={child.name}
              >
                {child.name}
              </span>
            </Link>
          </li>
        ))}
        {/* <li className='level1 position-relative mb-1'>
          <Link
            to='/collections/all'
            className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          >
            <img
              src={images.imageMenu1_1}
              className='d-block img position-absolute w-100 h-100 lazy loaded'
              alt='Áo thun polo'
            />

            <span
              className='pt-1 position-absolute text-uppercase mr-2 ml-2 align-items-center font-weight-bold '
              title='Áo thun polo'
            >
              Áo thun polo
            </span>
          </Link>
          <span className='js-submenu-2 plus_m position-absolute justify-content-center align-items-center d-flex text-white'>
            <b className='m_pl'>+</b>
            <b className='m_mn'>-</b>
          </span>
          <ul className='lv2 list-group p-0 list-unstyled bg-white'>
            <li className='level2 pr-lg-2 '>
              <Link
                to='/'
                className='pt-1 pb-1 position-relative d-flexactive'
                title='test 1'
              >
                test 1
              </Link>
            </li>
            <li className='level2 pr-lg-2 '>
              <Link
                to='/'
                className='pt-1 pb-1 position-relative d-flexactive'
                title='test 2'
              >
                test 2
              </Link>
            </li>
          </ul>
        </li>
        <li className='level1 position-relative mb-1'>
          <Link
            to='/collections/all'
            className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          >
            <img
              src={images.imageMenu1_2}
              className='d-block img position-absolute w-100 h-100 lazy loaded'
              alt='Áo thun unisex'
            />

            <span
              className='pt-1 position-absolute text-uppercase mr-2 ml-2 align-items-center font-weight-bold '
              title='Áo thun unisex'
            >
              Áo thun unisex
            </span>
          </Link>
        </li>
        <li className='level1 position-relative mb-1'>
          <Link
            to='/collections/all'
            className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          >
            <img
              src={images.imageMenu1_3}
              className='d-block img position-absolute w-100 h-100 lazy loaded'
              alt='Áo thun trơn'
            />

            <span
              className='pt-1 position-absolute text-uppercase mr-2 ml-2 align-items-center font-weight-bold '
              title='Áo thun trơn'
            >
              Áo thun trơn
            </span>
          </Link>
        </li>
        <li className='level1 position-relative mb-1'>
          <Link
            to='/a-o-thun-t-shirt'
            className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          >
            <img
              src={images.imageMenu1_4}
              className='d-block img position-absolute w-100 h-100 lazy loaded'
              alt='Áo thun T-Shirt'
            />

            <span
              className='pt-1 position-absolute text-uppercase mr-2 ml-2 align-items-center font-weight-bold '
              title='Áo thun T-Shirt'
            >
              Áo thun T-Shirt
            </span>
          </Link>
        </li> */}
      </ul>
    </li>
  );
}

export default MobileSubNavItem;
