import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ size }) {
  return (
    <div className='item_bl position-relative pb-3 mb-3'>
      <div className='blog entry-content p-0 position-relative d-block'>
        <Link
          className='w-100 ratio1by2 has-edge aspect modal-open d-block i_bl position-relative effect-ming text-center'
          to='/tin-tuc/thoi-trang-phim-vincenzo-ban-giao-huong-phong-cach-cua-y-va-han'
          title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
        >
          <img
            className='d-block img-cover position-absolute lazy loaded'
            src='//bizweb.dktcdn.net/100/350/547/articles/untitled-2-1.jpg?v=1626923344510'
            alt='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
          />
          <div className='position-absolute w-100 h-100 overlay' />
        </Link>
        <div className='blog-inf p-3 aside-item'>
          <h3 className='title_blo line_2 font-weight-bold small m-0'>
            <Link
              to='/tin-tuc/thoi-trang-phim-vincenzo-ban-giao-huong-phong-cach-cua-y-va-han'
              title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
            >
              Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn
            </Link>{' '}
          </h3>
          <span className={`entry-date ${size === 'sm' && 'small'}`}>
            05/05/2021
          </span>
          <div className={`modal-open ${size === 'sm' && 'small'}`}>
            Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố phục
            trang trong phim Vincenzo là một điểm sáng với những bộ cánh được
            tổng hoà từ những nét ăn mặc đặc trưng của Hàn Quốc và Italy – hai
            “thế lực” trong ngành thời trang thế giới.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
