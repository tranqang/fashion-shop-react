import React from 'react';
import { Link } from 'react-router-dom';
import convertPrice from 'src/helpers/convertPrice';
import images from 'src/static/images/images';

function ProductCard({ status, data }) {
  return (
    <div className='product-item position-relative modal-open'>
      <div className='sale-label text-center sale-top-right position-absolute'>
        <span className='small font-weight-bold'>- 11%</span>
      </div>
      <Link
        to={`/product/${data.id}`}
        className='thumb d-block modal-open'
        title={data.name}
      >
        <div className='position-relative w-100 m-0 ratio3by4 has-edge aspect'>
          <img
            src={data.primary_image[0]}
            className='d-block img img0 img1 img-cover position-absolute lazy loaded'
            alt={data.name}
          />
          <img
            src={data.primary_image[1]}
            className='d-block img2 img-cover position-absolute lazy loaded'
            alt={data.name}
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
          to='/product/chi-tiet'
          title={data.name}
        >
          {data.name}
        </Link>
        <div className='item-price mb-1 '>
          <span className='special-price font-weight-bold'>
            {convertPrice(data.price[0].unit_price)}
          </span>
          <del className='old-price pl-1'>
            {convertPrice(data.price[0].old_price)}
          </del>
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
