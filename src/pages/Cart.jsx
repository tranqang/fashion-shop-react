import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BreadCrumb from 'src/components/BreadCrumb';
import CartItem from 'src/components/CartItem';
import convertPrice from 'src/helpers/convertPrice';

function Cart() {
  const cart = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className='container'>
      <BreadCrumb from='Trang chủ' to='Giỏ hàng' />
      <div className='content_wrapper'>
        <div className='row js-cart'>
          <div className='basket cart__basket col-md-7 col-lg-8'>
            {cart.map(cartItem => (
              <CartItem
                key={cartItem.id}
                product={cartItem}
                setTotalPrice={setTotalPrice}
              />
            ))}
          </div>
          <div className='summary cart__summary col-md-5 col-lg-4'>
            <dl className='total mb-3 p-3 d-flex align-items-center clearfix flex-wrap justify-content-end rounded'>
              <dt className='text-uppercase font-weight-bold rounded'>Tổng</dt>
              <dd className='cart__summary_total font-weight-bold ml-auto mb-0'>
                {convertPrice(totalPrice)}
              </dd>
            </dl>
            <Link
              className='btn btn-block btn-checkout rounded mb-3 text-uppercase font-weight-bold'
              to='/checkout'
              role='button'
            >
              Thanh toán
            </Link>
            <Link
              className='btn btn-block btn-contitnue rounded mb-3'
              to='/collections/all'
              role='button'
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
