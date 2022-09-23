import React from 'react';
import BlogItem from './BlogItem';

function BlogList({ hot, title, padding, bg }) {
  const blogListStyle = {
    backgroundColor: bg,
  };
  return (
    <div className={`aside-item mb-2 p-${padding}`} style={blogListStyle}>
      <div className='heading mb-2 d-flex align-items-center border-bottom pb-2'>
        <div className='h2 title-head m-0 pt-2 pb-2 font-weight-bold'>
          <a
            style={{
              textTransform: 'uppercase',
            }}
            className='banner-w modal-open'
            title='TIN TỨC & SỰ KIỆN'
            href='/tin-tuc/tin-tuc'
          >
            {title}
          </a>
        </div>
      </div>
      <div className='list-blogs'>
        <BlogItem hot={hot} number={1} />
        <BlogItem hot={hot} number={2} />
        <BlogItem hot={hot} number={3} />
        <BlogItem hot={hot} number={4} />
        <BlogItem hot={hot} number={5} />
      </div>
      <div className='blogs-mores text-center'>
        <a title='Xem thêm' href='/tin-tuc/tin-tuc'>
          Xem thêm
        </a>
      </div>
    </div>
  );
}

export default BlogList;
