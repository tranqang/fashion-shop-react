import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function NewsCard() {
  return (
    <div className='item_grid mb-4'>
      <div className='img_thm position-relative'>
        <Link
          to='/tin-tuc/thoi-trang-phim-vincenzo-ban-giao-huong-phong-cach-cua-y-va-han'
          title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
          className='effect-ming'
        >
          <div className='position-relative w-100 m-0 be_opa modal-open text-center'>
            <img
              src={images.newsImg}
              className='lazy loaded'
              alt='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
            />
            <div className='position-absolute w-100 h-100 overlay' />
          </div>
        </Link>
        <div className='entry-date position-absolute text-center rounded-right'>
          <p className='day font-weight-bold'>05</p>
          <p className='yeah'>05/2021</p>
        </div>
      </div>
      <div className='cont'>
        <h3 className='title_blo font-weight-bold mt-2'>
          <Link
            className='line_1'
            to='/tin-tuc/thoi-trang-phim-vincenzo-ban-giao-huong-phong-cach-cua-y-va-han'
            title='Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn'
          >
            Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn
          </Link>
        </h3>
        <div className='sum line_1 line_3 h-auto'>
          Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố phục trang
          trong phim Vincenzo là một điểm sáng với những bộ cánh được tổng hoà
          từ những nét ăn mặc đặc trưng của Hàn Quốc và Italy – hai “thế lực”
          trong ngành thời trang thế giới. Series phim Vincenzo ra mắt vào đầu
          năm 2021 trên đài tvN Hàn Quốc và nhanh chóng được Netflix mua lại bản
          quyền phát sóng. Cốt truyện của phim xoay quanh Vincenzo Cassano (Song
          Joong-ki) – một luật sư kiêm cố vấn chiến lược (consigliere) của...
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
