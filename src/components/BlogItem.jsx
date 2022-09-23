import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function BlogItem({ hot, number }) {
  return (
    <article className='blog-item blog-item-list clearfix mb-4'>
      <Link
        className={`panel-box-media banner-w modal-open position-relative ${
          hot ? 'blog-hot' : ''
        }`}
        title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
        to='/thoi-trang-phim-vincenzo-ban-giao-huong-phong-cach-cua-y-va-han'
      >
        {hot ? (
          <span className='number'>
            <i className={`num-${number}`} />
          </span>
        ) : (
          <img
            src={images.imgBlog1}
            className='lazy loaded'
            alt='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
          />
        )}
      </Link>
      <div className={`blogs-rights  ${hot ? 'hot-rights' : ''}`}>
        <h3 className='blog-item-name font-weight-bold line_2'>
          <Link
            title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
            to='/tin-tuc/thoi-trang-phim-vincenzo-ban-giao-huong-phong-cach-cua-y-va-han'
          >
            Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn
          </Link>
        </h3>
        <div className='post-time'>Ngày đăng: 05/05/2021</div>
      </div>
    </article>
  );
}

export default BlogItem;
