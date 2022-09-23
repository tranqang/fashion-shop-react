import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function BrandCard() {
  return (
    <div className='swiper-slide text-center swiper-slide-active'>
      <Link to='#' title='Brand 1'>
        <img className='lazy loaded' src={images.brand1} alt='Brand 1' />
      </Link>
    </div>
  );
}

export default BrandCard;
