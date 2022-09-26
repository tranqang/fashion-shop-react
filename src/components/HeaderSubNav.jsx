import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';
import ChevronRightIcon from './icons/ChevronRightIcon';

function HeaderSubNav({ menu }) {
  return (
    <ul className='lv1 list-group p-0 list-unstyled'>
      {menu.map(menuItem => {
        const { id, name, url, children, image } = menuItem;
        return (
          <li
            key={id}
            className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'
          >
            <Link
              to={url}
              className='ratio4by3 position-relative has-edge aspect d-block modal-open'
              title={name}
            >
              <img
                src={images[image]}
                className='img position-absolute d-lg-block fade-08 lazy loaded'
                alt={name}
              />
            </Link>

            <Link
              to={url}
              className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase '
              title={name}
            >
              {name}
            </Link>
            {children && (
              <ul className='lv2 list-group p-0 list-unstyled'>
                {children.map(child => (
                  <li key={child.id} className='level2 pr-lg-2 '>
                    <Link
                      to={child.url}
                      className='pl-3 pt-2 pb-2 position-relative d-flex'
                      title={child.name}
                    >
                      <ChevronRightIcon />
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
      {/* <li className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'>
        <Link
          to='/collections/all'
          className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          title='Áo thun'
        >
          <img
            src={images.image1}
            className='img position-absolute d-lg-block fade-08 lazy loaded'
            alt='Áo thun'
          />
        </Link>

        <Link
          to='/collections/all'
          className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase '
          title='Áo thun'
        >
          Áo thun
        </Link>
        <ul className='lv2 list-group p-0 list-unstyled'>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Áo thun polo'
            >
              <ChevronRightIcon />
              Áo thun polo
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Áo thun unisex'
            >
              <ChevronRightIcon />
              Áo thun unisex
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Áo thun trơn'
            >
              <ChevronRightIcon />
              Áo thun trơn
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Áo thun T-Shirt'
            >
              <ChevronRightIcon />
              Áo thun T-Shirt
            </Link>
          </li>
        </ul>
      </li>
      <li className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'>
        <Link
          to='/collections/all'
          className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          title='Quần short'
        >
          <img
            src={images.image2}
            className='img position-absolute d-lg-block fade-08 lazy loaded'
            alt='Quần short'
          />
        </Link>

        <Link
          to='/collections/all'
          className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase '
          title='Quần short'
        >
          Quần short
        </Link>
        <ul className='lv2 list-group p-0 list-unstyled'>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần short kaki'
            >
              <ChevronRightIcon />
              Quần short kaki
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần short đũi'
            >
              <ChevronRightIcon />
              Quần short đũi
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần short gió'
            >
              <ChevronRightIcon />
              Quần short gió
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần short thể thao'
            >
              <ChevronRightIcon />
              Quần short thể thao
            </Link>
          </li>
        </ul>
      </li>
      <li className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'>
        <Link
          to='/collections/all'
          className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          title='Sơ mi dài tay'
        >
          <img
            src={images.image3}
            className='img position-absolute d-lg-block fade-08 lazy loaded'
            alt='Sơ mi dài tay'
          />
        </Link>

        <Link
          to='/collections/all'
          className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase '
          title='Sơ mi dài tay'
        >
          Sơ mi dài tay
        </Link>
        <ul className='lv2 list-group p-0 list-unstyled'>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Sơ mi dài tay dạ'
            >
              <ChevronRightIcon />
              Sơ mi dài tay dạ
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Sơ mi dài tay họa tiết'
            >
              <ChevronRightIcon />
              Sơ mi dài tay họa tiết
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Sơ mi dài tay kẻ'
            >
              <ChevronRightIcon />
              Sơ mi dài tay kẻ
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Sơ mi dài tay trơn'
            >
              <ChevronRightIcon />
              Sơ mi dài tay trơn
            </Link>
          </li>
        </ul>
      </li>
      <li className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'>
        <Link
          to='/collections/all'
          className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          title='Sơ mi ngắn tay'
        >
          <img
            src={images.image4}
            className='img position-absolute d-lg-block fade-08 lazy loaded'
            alt='Sơ mi ngắn tay'
          />
        </Link>

        <Link
          to='/collections/all'
          className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase '
          title='Sơ mi ngắn tay'
        >
          Sơ mi ngắn tay
        </Link>
        <ul className='lv2 list-group p-0 list-unstyled'>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Áo Aloha'
            >
              <ChevronRightIcon />
              Áo Aloha
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/ao-camp-shirt'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Áo camp shirt'
            >
              <ChevronRightIcon />
              Áo camp shirt
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Sơ mi ngắn tay họa tiết'
            >
              <ChevronRightIcon />
              Sơ mi ngắn tay họa tiết
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Sơ mi ngắn tay kẻ'
            >
              <ChevronRightIcon />
              Sơ mi ngắn tay kẻ
            </Link>
          </li>
        </ul>
      </li>
      <li className=' level1 pr-lg-3 pb-lg-3 pl-3 position-relative cls'>
        <Link
          to='/collections/all'
          className='ratio4by3 position-relative has-edge aspect d-block modal-open'
          title='Quần dài'
        >
          <img
            src={images.image5}
            className='img position-absolute d-lg-block fade-08 lazy loaded'
            alt='Quần dài'
          />
        </Link>

        <Link
          to='/collections/all'
          className='pt-1 pb-1 pr-1 position-relative js-checkMenu text-uppercase '
          title='Quần dài'
        >
          Quần dài
        </Link>
        <ul className='lv2 list-group p-0 list-unstyled sub-right'>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần âu'
            >
              <ChevronRightIcon />
              Quần âu
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần kaki'
            >
              <ChevronRightIcon />
              Quần kaki
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần jean'
            >
              <ChevronRightIcon />
              Quần jean
            </Link>
          </li>
          <li className='level2 pr-lg-2 '>
            <Link
              to='/collections/all'
              className='pl-3 pt-2 pb-2 position-relative d-flex'
              title='Quần gió'
            >
              <ChevronRightIcon />
              Quần gió
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
}

export default HeaderSubNav;
