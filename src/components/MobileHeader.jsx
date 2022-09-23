import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function MobileHeader() {
  return (
    <div className='menubar pr-2 w-100 text-right d-flex d-lg-none position-fixed align-items-center    '>
      <Link to='/' title='Mew Fashion' className='ml-2 logo d-inline-block'>
        <img alt='Mew Fashion' src={images.logo} className='img-fluid ' />
      </Link>
    </div>
  );
}

export default MobileHeader;
