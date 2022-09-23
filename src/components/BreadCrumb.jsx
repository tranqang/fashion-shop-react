import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function BreadCrumb({ from, to }) {
  return (
    <div className='breadcrumbs position-relative pt-1 pb-1'>
      <div className='inner position-relative'>
        <ul className='breadcrumb align-items-center pl-0 pr-0 m-0'>
          <li className='home'>
            <Link to='/' title='Mew Fashion'>
              {from}
            </Link>
            <img src={images.rightArrowIcon} alt='Mew Fashion' />
          </li>
          <li className='font-weight-bold'>{to}</li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumb;
