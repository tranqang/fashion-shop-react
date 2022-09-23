import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Banner from 'src/components/Banner';
import BrandCard from 'src/components/BrandCard';
import IntroduceCard from 'src/components/IntroduceCard';
import NewsCard from 'src/components/NewsCard';
import DefaultLayout from 'src/layouts/DefaultLayout';
import images from 'src/static/images/images';
// import 'src/static/styles/test.css';
const contentIntroduce = [
  {
    bgSrc: images.bgProduct1,
    RTL: true,
    title: 'Sự kiện trong tuần',
    content: 'Flash Sale',
    desc: 'Chỉ Áp dụng khi Đặt hàng qua Website',
    status: true,
    time: true,
  },
  {
    bgSrc: images.bgProduct2,
    RTL: false,
    title: 'Sản phẩm mới',
    content: 'T-Shirt',
    desc: 'Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k',
  },
  {
    bgSrc: images.bgProduct3,
    RTL: true,
    title: 'SẢN PHẨM HOT',
    content: 'QUẦN SHORT',
    desc: 'Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k',
  },
  {
    bgSrc: images.bgProduct4,
    RTL: false,
    title: 'THỜI TRANG',
    content: 'ÁO SƠ MI',
    desc: 'Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k',
  },
];

function Home() {
  return (
    <>
      <Banner />
      {contentIntroduce.map((content, index) => (
        <IntroduceCard key={index} {...content} />
      ))}
      {/* <IntroduceCard RTL bgSrc={images.bgProduct1} />
      <IntroduceCard bgSrc={images.bgProduct2} />
      <IntroduceCard RTL bgSrc={images.bgProduct3} />
      <IntroduceCard bgSrc={images.bgProduct4} /> */}
      <div className='m_blog pb-lg-5 pt-lg-5 pt-3 pb-3'>
        <div className='container'>
          <h2 className='title mb-5 text-uppercase font-weight-bold text-center position-relative'>
            <Link
              className='dinh position-relative d-inline-block'
              to='tin-tuc'
              title='Tin tức - Sự kiện'
            >
              Tin tức - Sự kiện
            </Link>
          </h2>
          <article className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <NewsCard />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <NewsCard />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <NewsCard />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <NewsCard />
            </div>
          </article>
        </div>
      </div>
      <div className='m_brand pb-lg-5 pt-lg-4 pt-3 pb-3'>
        <div className='container'>
          <h3 className='title mb-5 text-uppercase font-weight-bold text-center position-relative'>
            <span className='position-relative d-inline-block'>
              Top Thương Hiệu
            </span>
          </h3>
          <div className='m_brand_slide swiper-container swiper-container-initialized swiper-container-horizontal'>
            <div className='swiper-wrapper'>
              <ReactOwlCarousel
                autoplay
                className='owl-theme'
                smartSpeed={1000}
                autoplaySpeed={1000}
                margin={15}
                items={5}
                dots={false}
                responsive={{
                  0: {
                    items: 1,
                  },
                  576: {
                    items: 3,
                  },
                  992: {
                    items: 5,
                  },
                  1200: {
                    items: 7,
                  },
                }}
              >
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
                <div className='item'>
                  <BrandCard />
                </div>
              </ReactOwlCarousel>
            </div>
            <span
              className='swiper-notification'
              aria-live='assertive'
              aria-atomic='true'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
