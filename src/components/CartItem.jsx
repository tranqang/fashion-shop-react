import React from 'react';
import images from 'src/static/images/images';

function CartItem() {
  return (
    <div className='d-flex cart__basket__item product mb-4 rounded ux-card position-relative clearfix variantId-45187779'>
      <img
        src={images.imgProduct8_2}
        className='position-absolute'
        alt='product'
      />
      <div className='col-12 d-flex p-0'>
        <p className='item-title clearfix mb-2'>
          <a
            href='/collections/chi-tiet.html'
            title='Áo thun T-shirt M-F 07'
            className='font-weight-bold'
          >
            Áo thun T-shirt M-F 07
          </a>
          <span className='d-block small font-weight-bold'>
            X / Cotton / Trắng
          </span>
          <span
            className='price ml-auto text-left clearfix d-block'
            style={{ fontSize: '14px' }}
          >
            Giá: 249.000&nbsp;₫
          </span>
        </p>
        <span className='variantTotalPrice price font-weight-bold ml-auto text-right clearfix'>
          249.000&nbsp;₫
        </span>
      </div>
      <div className='number-input d-inline-flex rounded'>
        <button className='position-relative m-0 border-0 step-down-qty js-step-qty' />
        <input
          className='quantity text-center'
          readOnly
          min={1}
          name='Lines'
          defaultValue={1}
          size={2}
          type='number'
          data-variantid={45187779}
        />
        <button className='position-relative m-0 border-0 step-up-qty js-step-qty plus' />
      </div>
      <button
        className='btn btn-outline-danger remove ml-auto remove-item-cart'
        title='Xóa sản phẩm'
        data-id={45187779}
      >
        Xoá
      </button>
    </div>
  );
}

export default CartItem;
