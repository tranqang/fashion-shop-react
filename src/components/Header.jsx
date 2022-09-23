import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';
import CartIcon from './icons/CartIcon';
import HeaderNav from './HeaderNav';
import ProfileIcon from './icons/ProfileIcon';
import SearchBlock from './SearchBlock';

function Header() {
  return (
    <div className='col-left w-100 position-fixed pt-0 pb-0 bg-white'>
      <div className='logo_mb text-center p-1 bg-grey  d-lg-none'>
        <Link to='./gioi-thieu' title='Mew Fashion' className='ml-2 '>
          <img alt='Mew Fashion' src={images.logo} className='img-fluid lazy' />
        </Link>
      </div>
      <div className='container position-relative'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-2 col-xl-3 d-none d-lg-block'>
            <Link to='/' title='Mew Fashion' className='logo d-inline-block'>
              <img
                alt='Mew Fashion'
                src={images.logo}
                className='img-fluid lazy loaded'
              />
            </Link>
          </div>
          <div className='col-12 col-lg-10 col-xl-9 d-lg-flex align-items-center position-static pr-menu'>
            <HeaderNav />
            <SearchBlock />
            <div className='navigation-bottom mt-auto mt-lg-0 d-none d-lg-block'>
              <div className='b_use d-flex align-items-stretch'>
                <div
                  id='js-login-toggle'
                  className='p-2 btn-account d-flex align-items-center justify-content-center'
                  title='Đăng ký/Đăng nhập'
                >
                  <ProfileIcon />
                  <div
                    id='m_login'
                    className='pop_login position-absolute p-3 text-center rounded'
                  >
                    <Link
                      to='/account/login'
                      className='item_login d-block pt-1 pb-1'
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to='/account/register'
                      className='item_login d-block pt-1 pb-1'
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
                <Link
                  className='p-2 btn-cart position-relative d-inline-flex'
                  title='Giỏ hàng'
                  to='/cart'
                >
                  <CartIcon />
                  <span className='btn-cart-indicator position-absolute d-none'></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
