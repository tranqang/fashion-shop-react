import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function ContactNav() {
  const contactState = useSelector(state => state.toggle.contact);
  return (
    <div
      className={`fix-phone p-1 p-lg-2 ${contactState && 'active'}`}
      id='mb_contact'
    >
      <Link
        to='tel:19006750'
        title='Gọi ngay'
        className='play0 phone-box m-auto ml-lg-1 mr-lg-1 d-flex align-items-center justify-content-center'
      >
        <img
          className='d-lg-block lazy loaded'
          src={images.telephone}
          alt='Mew Fashion'
        />
      </Link>
      <Link
        rel='noreferrer'
        to='https://m.me/mewtheme'
        title='Chat Facebook'
        target='_blank'
        className='fb-box d-flex m-auto ml-lg-1 mr-lg-1 align-items-center justify-content-center rounded-circle'
      >
        <img
          className='dd-lg-block lazy loaded'
          src={images.messenger}
          alt='Mew Fashion'
        />
      </Link>
      <Link
        rel='noreferrer'
        to='https://zalo.me/+18001231234'
        title='Chat Zalo'
        target='_blank'
        className='zalo-box m-auto ml-lg-1 mr-lg-1 d-flex align-items-center justify-content-center'
      >
        <img
          className='d-lg-block lazy loaded'
          src={images.zalo}
          alt='Mew Fashion'
        />
      </Link>
    </div>
  );
}

export default ContactNav;
