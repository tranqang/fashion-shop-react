import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function BlogItem({ hot, number, news }) {
  return (
    <article className='blog-item blog-item-list clearfix mb-4'>
      <Link
        className={`panel-box-media banner-w modal-open position-relative ${
          hot ? 'blog-hot' : ''
        }`}
        title={news.title}
        to={`/tin-tuc/${news.id}`}
      >
        {hot ? (
          <span className='number'>
            <i className={`num-${number}`} />
          </span>
        ) : (
          <img
            src={images[news.image]}
            className='lazy loaded'
            alt={news.title}
          />
        )}
      </Link>
      <div className={`blogs-rights  ${hot ? 'hot-rights' : ''}`}>
        <h3 className='blog-item-name font-weight-bold line_2'>
          <Link
            title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
            to={`/tin-tuc/${news.id}`}
          >
            {news.title}
          </Link>
        </h3>
        <div className='post-time'>Ngày đăng: {news.date}</div>
      </div>
    </article>
  );
}

export default BlogItem;
