import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function BrandCard({ brand }) {
  return (
    <div className='swiper-slide text-center swiper-slide-active'>
      <Link to='#' title={brand.name}>
        <img
          className='lazy loaded'
          src={images[brand.logo]}
          alt={brand.name}
        />
      </Link>
    </div>
  );
}

export default BrandCard;
