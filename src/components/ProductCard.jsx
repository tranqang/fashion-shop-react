import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function ProductCard({ status }) {
  return (
    <div className='product-item position-relative modal-open'>
      <div className='sale-label text-center sale-top-right position-absolute'>
        <span className='small font-weight-bold'>- 11%</span>
      </div>
      <Link
        to='/collections/chi-tiet'
        className='thumb d-block modal-open'
        title='Áo thun T-shirt M-F 08'
      >
        <div className='position-relative w-100 m-0 ratio3by4 has-edge aspect'>
          <img
            src={images.imgProduct7_1}
            className='d-block img img0 img1 img-cover position-absolute lazy loaded'
            alt='Áo thun T-shirt M-F 08'
          />
          <img
            src={images.imgProduct7_2}
            className='d-block img2 img-cover position-absolute lazy loaded'
            alt='Áo thun T-shirt M-F 08'
          />
          <span
            className='action font-weight-bold d-inline-block position-absolute pt-1 pb-1 w-100 text-center'
            title='Chi tiết'
          >
            Chi tiết
          </span>
        </div>
      </Link>
      <div className='item-info mt-1 text-center'>
        <Link
          className='modal-open pl-3 pr-3 line_1'
          to='/collections/chi-tiet'
          title='Áo thun T-shirt M-F 08'
        >
          Áo thun T-shirt M-F 08
        </Link>
        <div className='item-price mb-1 '>
          <span className='special-price font-weight-bold'>249.000₫</span>
          <del className='old-price pl-1'> 279.000₫</del>
        </div>
      </div>
      {status && (
        <div className='clearfix'>
          <div className='sold-module d-flex w-100 position-relative modal-open'>
            <div
              style={{
                width: '18px',
                left: '2px',
                top: '-2px',
                position: 'absolute',
              }}
            >
              <img
                src={images.hotSale}
                className='position-absolute'
                alt='Hot Sale'
              />
            </div>

            <div className='d-flex align-items-center justify-content-center sold text-uppercase position-absolute h-100 w-100'>
              Hết hàng
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
