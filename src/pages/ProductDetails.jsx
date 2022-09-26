import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from 'src/components/BreadCrumb';
import GiftCard from 'src/components/card/GiftCard';
import InfoCard from 'src/components/card/InfoCard';
import CartIcon from 'src/components/icons/CartIcon';
import TickBoldIcon from 'src/components/icons/TickBoldIcon';
import ProductDetailsImg from 'src/components/ProductDetailsImg';
import ProductFormSelect from 'src/components/ProductFormSelect';
import ProductSlide from 'src/components/ProductSlide';
import SizeModal from 'src/components/SizeModal';
import { productData } from 'src/data/data';

function ProductDetails() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [colorSelect, setColorSelect] = useState({});
  const [productImg, setProductImg] = useState({});

  useEffect(() => {
    const product = productData.find(product => product.id === productId - 0);
    setProductDetail(product);
  }, [productId]);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const options = {
    status: false,
    nav: false,
    items: 4,
  };
  useEffect(() => {
    if (productDetail.color_image) {
      setProductImg(
        productDetail.color_image.find(item => item.color === colorSelect.color)
      );
    }
  }, [colorSelect, productDetail.color_image]);
  return (
    <div className='container'>
      <BreadCrumb from='Trang chủ' to='Áo thun T-shirt M-F 08' />
      <div className='row clearfix mb-4 pt-3'>
        <div className='product-layout_col-left col-12 col-lg-7 col-xl-8 mb-lg-0 mb-3'>
          <ProductDetailsImg imageList={productImg} />
        </div>
        <div className='product-layout_col-right col-12 col-lg-5 col-xl-4 product-warp'>
          <div className='stk-pro'>
            <h1 className='product-name font-weight-bold text-uppercase'>
              {productDetail.name}
            </h1>

            <ProductFormSelect
              product={productDetail}
              colorSelect={colorSelect}
              setColorSelect={setColorSelect}
            />
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
        {/* <ProductSlide title='Sản phẩm liên quan' {...options} /> */}
      </div>
      {showSizeModal && <SizeModal setShowSizeModal={setShowSizeModal} />}
    </div>
  );
}

export default ProductDetails;
