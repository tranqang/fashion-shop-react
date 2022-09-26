import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { menuData } from 'src/data/data';
import images from 'src/static/images/images';
import MobileSubNavItem from './MobileSubNavItem';

function MobileSubNav() {
  const menuMobile = menuData.find(menu => menu.id === 3);
  const [openIndex, setOpenIndex] = useState(0);
  const mobileSubNavState = useSelector(state => state.toggle.mobile_subnav);
  return (
    <div
      className={`col-left position-fixed d-flex flex-column pt-lg-2 pb-lg-2 pt-0 pb-0 d-lg-none ${
        mobileSubNavState && 'active'
      }`}
      id='col-left'
    >
      <div className='logo_mb text-center p-1 bg-grey  d-lg-none '>
        <Link to='/' title='Mew Fashion' className='ml-2 logo d-inline-block'>
          <img alt='Mew Fashion' src={images.logo} className='img-fluid' />
        </Link>
      </div>
      <div className='align-items-center menu_mobile position-relative'>
        <ul
          id='menu'
          className='p-0 m-0 h-100 list-unstyled d-lg-flex justify-content-lg-end no_waring'
        >
          {menuMobile.children.map((menuItem, index) => (
            <MobileSubNavItem
              key={menuItem.id}
              setOpenIndex={setOpenIndex}
              index={index}
              open={index === openIndex}
              menu={menuItem}
            />
          ))}
          {/* <MobileSubNavItem />
          <MobileSubNavItem open />
          <MobileSubNavItem />
          <MobileSubNavItem />
          <MobileSubNavItem /> */}
        </ul>
      </div>
    </div>
  );
}

export default MobileSubNav;
