import React from 'react';
import { Link } from 'react-router-dom';
import images from 'src/static/images/images';

function NewsCard({ news }) {
  return (
    <div className='item_grid mb-4'>
      <div className='img_thm position-relative'>
        <Link
          to={`/tin-tuc/${news.id}`}
          title={news.title}
          className='effect-ming'
        >
          <div className='position-relative w-100 m-0 be_opa modal-open text-center'>
            <img
              src={images[news.image]}
              className='lazy loaded'
              alt={news.title}
            />
            <div className='position-absolute w-100 h-100 overlay' />
          </div>
        </Link>
        <div className='entry-date position-absolute text-center rounded-right'>
          <p className='day font-weight-bold'>{news.date.split('/')[0]}</p>
          <p className='yeah'>
            {news.date.split('/')[1] + '/' + news.date.split('/')[2]}
          </p>
        </div>
      </div>
      <div className='cont'>
        <h3 className='title_blo font-weight-bold mt-2'>
          <Link
            className='line_1'
            to={`/tin-tuc/${news.id}`}
            title={news.title}
          >
            {news.title}
          </Link>
        </h3>
        <div className='sum line_1 line_3 h-auto'>{news.content}</div>
      </div>
    </div>
  );
}

export default NewsCard;
