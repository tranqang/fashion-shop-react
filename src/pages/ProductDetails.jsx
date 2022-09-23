import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from 'src/components/BreadCrumb';
import GiftCard from 'src/components/card/GiftCard';
import InfoCard from 'src/components/card/InfoCard';
import CartIcon from 'src/components/icons/CartIcon';
import TickBoldIcon from 'src/components/icons/TickBoldIcon';
import ProductDetailsImg from 'src/components/ProductDetailsImg';
import ProductFormSelect from 'src/components/ProductFormSelect';
import ProductSlide from 'src/components/ProductSlide';
import SizeModal from 'src/components/SizeModal';

function ProductDetails() {
  const [showSizeModal, setShowSizeModal] = useState(false);
  const options = {
    status: false,
    nav: false,
    items: 4,
  };
  return (
    <div className='container'>
      <BreadCrumb from='Trang chủ' to='Áo thun T-shirt M-F 08' />
      <div className='row clearfix mb-4 pt-3'>
        <div className='product-layout_col-left col-12 col-lg-7 col-xl-8 mb-lg-0 mb-3'>
          <ProductDetailsImg />
        </div>
        <div className='product-layout_col-right col-12 col-lg-5 col-xl-4 product-warp'>
          <div className='stk-pro'>
            <h1 className='product-name font-weight-bold text-uppercase'>
              Áo thun T-shirt M-F 08
            </h1>
            <div className='product-info position-relative'>
              <span className='inventory_quantity text-success'>Còn hàng</span>
            </div>
            <div className='product-info position-relative'>
              Thương hiệu: <span id='vendor'>Mew Fashion</span>
            </div>
            <div className='product-info position-relative'>
              Loại: <span id='type'>Áo thun</span>
            </div>
            <ProductFormSelect />
            <div className='product_size_guide d-flex  pt-3 pb-3'>
              <Link
                to='#'
                onClick={() => setShowSizeModal(true)}
                title='Bạn biết chọn size chuẩn của mình chưa?'
              >
                + Bạn biết chọn size chuẩn của mình chưa?
              </Link>
            </div>
            <div className='product-content rte'>
              <div className='panel-group' id='accordion'>
                <GiftCard />
                <InfoCard details />
                <InfoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row clearfix bg-white pt-4'>
        <ProductSlide title='Sản phẩm liên quan' {...options} />
      </div>
      {showSizeModal && <SizeModal setShowSizeModal={setShowSizeModal} />}
    </div>
  );
}

export default ProductDetails;
