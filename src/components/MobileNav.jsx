import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { show } from 'src/redux/reducers/toggleSlice';
import CartIcon from './icons/CartIcon';
import ContactNav from './ContactNav';
import HomeIcon from './icons/HomeIcon';
import MenuIcon from './icons/MenuIcon';
import PhoneIcon from './icons/PhoneIcon';
import ProfileIcon from './icons/ProfileIcon';

function MobileNav() {
  const contactState = useSelector(state => state.toggle.contact);
  const mobileSubnavState = useSelector(state => state.toggle.mobile_subnav);
  const dispatch = useDispatch();
  return (
    <>
      <div className='d-lg-none d-flex mew_mobi_bar w-100'>
        <Link
          to='/'
          title='Trang chủ'
          className='item d-flex flex-column align-items-center p-1 justify-content-center  active'
        >
          <HomeIcon />
          Trang chủ
        </Link>

        <Link
          className='item d-flex flex-column p-1 btn-account align-items-center justify-content-center'
          title='Tài khoản của tôi'
          to='/account/login'
        >
          <ProfileIcon />
          Đăng nhập
        </Link>

        <Link
          onClick={() => {
            dispatch(show({ key: 'contact', value: !contactState }));
            dispatch(show({ key: 'mobile_subnav', value: false }));
          }}
          id='support'
          className='item d-flex flex-column p-1 btn-support align-items-center justify-content-center'
          title='Liên hệ'
          to='/'
        >
          <PhoneIcon />
          Hỗ trợ
        </Link>
        <ContactNav />
        <Link
          className='item d-flex flex-column p-1 align-items-center justify-content-center btn-cart position-relative  '
          title='Giỏ hàng'
          to='/cart'
        >
          <span className='position-relative flex-column d-flex'>
            <CartIcon />
            Giỏ hàng
            <span className='btn-cart-indicator text-center position-absolute d-none align-items-center justify-content-center'></span>
          </span>
        </Link>
        <Link
          onClick={() => {
            dispatch(show({ key: 'mobile_subnav', value: !mobileSubnavState }));
            dispatch(show({ key: 'contact', value: false }));
            dispatch(show({ key: 'search', value: false }));
          }}
          className='item d-flex flex-column align-items-center justify-content-center menu-toggle  p-1 '
          id='js-menu-toggle'
        >
          <MenuIcon />
          Menu
        </Link>
      </div>
    </>
  );
}

export default MobileNav;
