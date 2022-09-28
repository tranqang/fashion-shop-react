import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Banner from 'src/components/Banner';
import BrandCard from 'src/components/BrandCard';
import IntroduceCard from 'src/components/IntroduceCard';
import NewsCard from 'src/components/NewsCard';
import { brandData, catalogData, newsData } from 'src/data/data';
import DefaultLayout from 'src/layouts/DefaultLayout';
import images from 'src/static/images/images';
function Home() {
  return (
    <>
      <Banner />
      {catalogData.map(catalog => (
        <IntroduceCard key={catalog.id} catalog={catalog} />
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
            {newsData.slice(0, 4).map(news => (
              <div key={news.id} className='col-12 col-sm-6 col-md-6 col-lg-3'>
                <NewsCard news={news} />
              </div>
            ))}
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
                margin={60}
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
                {brandData.map(brand => (
                  <div key={brand.id} className='item'>
                    <BrandCard brand={brand} />
                  </div>
                ))}
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
