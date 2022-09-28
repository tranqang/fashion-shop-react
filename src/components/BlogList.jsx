import React from 'react';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';

function BlogList({ hot, title, padding, bg, newsList, url }) {
  const blogListStyle = {
    backgroundColor: bg,
  };
  return (
    <div className={`aside-item mb-2 p-${padding}`} style={blogListStyle}>
      <div className='heading mb-2 d-flex align-items-center border-bottom pb-2'>
        <div className='h2 title-head m-0 pt-2 pb-2 font-weight-bold'>
          <Link
            style={{
              textTransform: 'uppercase',
            }}
            className='banner-w modal-open'
            title={title}
            to={url}
          >
            {title}
          </Link>
        </div>
      </div>
      <div className='list-blogs'>
        {newsList.map((news, index) => (
          <BlogItem key={news.id} hot={hot} number={index + 1} news={news} />
        ))}
      </div>
      <div className='blogs-mores text-center'>
        <Link title='Xem thêm' to={url}>
          Xem thêm
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
