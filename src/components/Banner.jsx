import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '../static/styles/owl-carousel.custom.css';
function Banner() {
  return (
    <>
      <OwlCarousel
        className='owl-theme'
        loop
        autoplay
        smartSpeed={1000}
        items={1}
        autoplaySpeed={1000}
      >
        <div className='item'>
          <Link className='d-block w-100 h-100' href='/#' title='Mew Fashion'>
            <img
              className='d-block img img-cover position-absolute'
              src={images.slideImg1}
              alt='Mew Fashion'
            />
          </Link>
        </div>
        <div className='item'>
          <Link className='d-block w-100 h-100' href='/#' title='Mew Fashion'>
            <img src={images.slideImg2} alt='Mew Fashion' />
          </Link>
        </div>
      </OwlCarousel>
    </>
  );
}

export default Banner;
